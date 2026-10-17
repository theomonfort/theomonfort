import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { createGalaxyModels } from './playbook-galaxy-models';
import type { GalaxyCategory } from './playbook-galaxy';
import type { CategoryId } from './playbook-categories';
import type { GalaxyAudioPose } from './playbook-galaxy-audio';

interface SceneOptions {
  host: HTMLElement;
  categories: GalaxyCategory[];
  onCategory: (id: CategoryId) => void;
  onEntry: (category: CategoryId, slug: string) => void;
  onError: (error: unknown) => void;
  onOverview: () => void;
  onCameraPose: (pose: GalaxyAudioPose) => void;
  sunLabel: string;
}

const solarRadius = 23;
function solarPosition(index: number): [number, number, number] {
  const angle = -Math.PI * 0.72 + index * Math.PI * 2 / 5;
  return [Math.sin(angle) * solarRadius, Math.cos(angle) * 1.2, Math.cos(angle) * solarRadius];
}

const positions: Record<CategoryId, [number, number, number]> = {
  introduction: [-30, 0, 18],
  plan: solarPosition(0),
  develop: solarPosition(1),
  review: solarPosition(2),
  secure: solarPosition(3),
  operate: solarPosition(4),
  administration: [-26, 7, -28],
};
const route = ['plan', 'develop', 'review', 'secure', 'operate'] as const;

interface Destination {
  category: GalaxyCategory;
  group: THREE.Group;
  model: THREE.Group;
  radius: number;
  height: number;
}

interface Mission {
  category: CategoryId;
  slug: string;
  group: THREE.Group;
  model: THREE.Group;
}

export function createGalaxyScene({ host, categories, onCategory, onEntry, onError, onOverview, onCameraPose, sunLabel }: SceneOptions) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.domElement.setAttribute('aria-hidden', 'true');
  host.prepend(renderer.domElement);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#05060f');
  scene.fog = new THREE.FogExp2('#05060f', 0.0045);
  const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 400);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = false;
  controls.minPolarAngle = 0.12;
  controls.maxPolarAngle = Math.PI * 0.85;
  controls.minDistance = 5;
  controls.maxDistance = 240;
  controls.rotateSpeed = 0.6;
  controls.zoomSpeed = 0.8;
  controls.panSpeed = 0.6;
  controls.screenSpacePanning = true;
  const composer = new EffectComposer(renderer);
  const renderPass = new RenderPass(scene, camera);
  const bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.65, 0.6, 1.15);
  const outputPass = new OutputPass();
  composer.addPass(renderPass);
  composer.addPass(bloom);
  composer.addPass(outputPass);

  const models = createGalaxyModels();
  const courier = models.courier();
  const courierExhaust = courier.getObjectByName('courier-exhaust')!;
  courier.visible = false;
  courier.scale.setScalar(0.7);
  scene.add(courier);
  const geometries: THREE.BufferGeometry[] = [];
  const materials: THREE.Material[] = [];
  const destinations: Destination[] = [];
  const missions: Mission[] = [];
  const labels = document.createElement('div');
  labels.className = 'galaxy-labels';
  host.append(labels);
  const anchors: { button: HTMLButtonElement; object: THREE.Object3D; category: CategoryId | null; slug?: string }[] = [];
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const projection = new THREE.Vector3();
  const cameraForward = new THREE.Vector3();
  const desiredTarget = new THREE.Vector3();
  const desiredCamera = new THREE.Vector3();
  const startCamera = new THREE.Vector3();
  const startTarget = new THREE.Vector3();
  const courierStart = new THREE.Vector3();
  const courierTarget = new THREE.Vector3();
  const courierOrientation = new THREE.Quaternion();
  const flightArc = new THREE.Vector3();
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let active: CategoryId | null = null;
  let selectedSlug: string | null = null;
  let allowed = new Set(categories.flatMap((category) => category.entries.map((entry) => entry.slug)));
  let disposed = false;
  let frame = 0;
  let visible = true;
  let flying = false;
  let courierMission: Mission | undefined;
  let courierMoving = false;
  let courierOrbitCenter: THREE.Vector3 | null = null;
  let flightProgress = 1;
  let motion = !reducedMotion.matches;
  let interacting = false;
  let hovering = false;
  let lastTime = 0;
  let ambientTime = 0;
  let width = 1;
  let height = 1;

  scene.add(new THREE.HemisphereLight('#b3c8ff', '#292139', 1.6));
  const keyLight = new THREE.DirectionalLight('#fff0d9', 2.2);
  keyLight.position.set(-22, 38, 24);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.set(2048, 2048);
  Object.assign(keyLight.shadow.camera, { left: -52, right: 52, top: 52, bottom: -52, near: 1, far: 120 });
  keyLight.shadow.bias = -0.001;
  scene.add(keyLight);
  const rim = new THREE.DirectionalLight('#6984ff', 1.5);
  rim.position.set(25, 8, -35);
  scene.add(rim);

  const solarSun = new THREE.Group();
  solarSun.name = 'central-sun';
  solarSun.position.y = 1;
  const sunGeometry = new THREE.IcosahedronGeometry(3.4, 3);
  const sunMaterial = new THREE.ShaderMaterial({
    uniforms: { time: { value: 0 } },
    vertexShader: `
      varying vec3 surface;
      varying vec3 viewNormal;
      varying vec3 viewDirection;
      void main() {
        surface = position;
        vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
        viewNormal = normalize(normalMatrix * normal);
        viewDirection = -viewPosition.xyz;
        gl_Position = projectionMatrix * viewPosition;
      }
    `,
    fragmentShader: `
      uniform float time;
      varying vec3 surface;
      varying vec3 viewNormal;
      varying vec3 viewDirection;
      void main() {
        float plasma = sin(surface.y * 5.0 + sin(surface.x * 3.0 + time * 0.12))
          * sin(surface.z * 4.0 - time * 0.08) * 0.5 + 0.5;
        float rim = pow(max(0.0, dot(normalize(viewNormal), normalize(viewDirection))), 0.45);
        vec3 color = mix(vec3(1.4, 0.24, 0.012), vec3(2.4, 1.05, 0.12), plasma);
        gl_FragColor = vec4(color * (0.5 + rim * 0.65), 1.0);
      }
    `,
  });
  const solarCore = new THREE.Mesh(sunGeometry, sunMaterial);
  solarSun.add(solarCore);
  const sunLight = new THREE.PointLight('#ffc476', 750, 120, 2);
  solarSun.add(sunLight);
  geometries.push(sunGeometry);
  materials.push(sunMaterial);
  const coronaMaterial = new THREE.MeshBasicMaterial({
    color: '#ffb000', transparent: true, opacity: 0.5,
    blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false,
  });
  materials.push(coronaMaterial);
  const corona = Array.from({ length: 3 }, (_, index) => {
    const geometry = new THREE.TorusGeometry(3.9 + index * 0.4, 0.04, 6, 96);
    geometries.push(geometry);
    const flare = new THREE.Mesh(geometry, coronaMaterial);
    flare.rotation.set(0.5 + index * 0.8, index * 0.7, index * 0.3);
    solarSun.add(flare);
    return flare;
  });
  scene.add(solarSun);
  const sunAnchor = new THREE.Object3D();
  sunAnchor.position.y = 6.5;
  solarSun.add(sunAnchor);
  const sunButton = document.createElement('button');
  sunButton.type = 'button';
  sunButton.className = 'galaxy-planet-label galaxy-sun-label';
  sunButton.style.setProperty('--sector-color', '#ffb000');
  sunButton.textContent = sunLabel;
  sunButton.addEventListener('click', onOverview);
  labels.append(sunButton);
  anchors.push({ button: sunButton, object: sunAnchor, category: null });

  const fireflyGeometry = new THREE.IcosahedronGeometry(1, 1);
  geometries.push(fireflyGeometry);
  const fireflyColors = ['#ffe0a3', '#91efff', '#ffc2dc', '#d2e7ff'];
  const fireflyMaterials = fireflyColors.map((color) => {
    const material = new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(3), toneMapped: false });
    materials.push(material);
    return material;
  });
  const fireflies = Array.from({ length: 52 }, (_, index) => {
    const angle = index * 2.399963;
    const radius = 7 + (index * 7.3 % 30);
    const base = new THREE.Vector3(Math.cos(angle) * radius, -2 + (index * 3.7 % 13), Math.sin(angle) * radius);
    const mesh = new THREE.Mesh(fireflyGeometry, fireflyMaterials[index % fireflyMaterials.length]);
    mesh.name = 'floating-light';
    mesh.position.copy(base);
    mesh.scale.setScalar(0.12 + (index % 5) * 0.045);
    scene.add(mesh);
    return { mesh, base, phase: angle };
  });

  const grid = new THREE.GridHelper(180, 90, '#335382', '#20314f');
  grid.position.y = -6;
  grid.material.transparent = true;
  grid.material.opacity = 0.16;
  geometries.push(grid.geometry);
  materials.push(grid.material);
  scene.add(grid);
  const starPositions: number[] = [];
  const starColors: number[] = [];
  for (let index = 0; index < 1400; index++) {
    const random = (seed: number) => {
      const value = Math.sin(index * 127.1 + seed * 311.7) * 43758.5453;
      return value - Math.floor(value);
    };
    const angle = random(1) * Math.PI * 2;
    const y = random(2) * 2 - 1;
    const radius = 110 + random(3) * 55;
    const planar = Math.sqrt(1 - y * y);
    starPositions.push(Math.cos(angle) * planar * radius, y * radius, Math.sin(angle) * planar * radius);
    const color = new THREE.Color().setHSL(0.55 + random(4) * 0.15, 0.3, 0.65 + random(5) * 0.3);
    starColors.push(color.r, color.g, color.b);
  }
  const stars = new THREE.BufferGeometry();
  stars.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
  stars.setAttribute('color', new THREE.Float32BufferAttribute(starColors, 3));
  const starMaterial = new THREE.PointsMaterial({ size: 1.5, sizeAttenuation: false, vertexColors: true, fog: false });
  geometries.push(stars);
  materials.push(starMaterial);
  scene.add(new THREE.Points(stars, starMaterial));

  function path(points: THREE.Vector3[], color: string, opacity: number, parent: THREE.Group | THREE.Scene, loop = false) {
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ color, transparent: true, opacity });
    geometries.push(geometry);
    materials.push(material);
    const object = loop ? new THREE.LineLoop(geometry, material) : new THREE.Line(geometry, material);
    parent.add(object);
    return object;
  }

  for (const radius of [solarRadius, 15, 32]) {
    path(Array.from({ length: 180 }, (_, index) => {
      const angle = index / 180 * Math.PI * 2;
      return new THREE.Vector3(Math.sin(angle) * radius, Math.cos(angle) * 1.2, Math.cos(angle) * radius);
    }), radius === solarRadius ? '#ffb000' : '#657eab', radius === solarRadius ? 0.28 : 0.12, scene, true);
  }

  const selectionMaterial = new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.85 });
  const selectionGeometry = new THREE.TorusGeometry(1.35, 0.035, 6, 48);
  materials.push(selectionMaterial);
  geometries.push(selectionGeometry);
  const selectionRing = new THREE.Mesh(selectionGeometry, selectionMaterial);
  selectionRing.rotation.x = Math.PI / 2;
  selectionRing.visible = false;
  scene.add(selectionRing);

  for (const category of categories) {
    const group = new THREE.Group();
    group.position.set(...positions[category.id]);
    const model = models.destination(category.id, category.color);
    const modelHeight = new THREE.Box3().setFromObject(model).max.y;
    group.add(model);
    scene.add(group);
    const radius = 6.5 + Math.max(0, Math.ceil(category.entries.length / 10) - 1) * 2;
    destinations.push({ category, group, model, radius, height: modelHeight });
    const light = new THREE.PointLight(category.color, 12, 13, 2);
    light.position.set(0, 3, 0);
    group.add(light);
    const anchor = new THREE.Object3D();
    anchor.position.y = modelHeight + 1.2;
    group.add(anchor);

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'galaxy-planet-label';
    button.style.setProperty('--sector-color', category.color);
    button.setAttribute('aria-label', `${category.label} (${category.entries.length})`);
    const title = document.createElement('strong');
    title.textContent = category.name;
    const subtitle = document.createElement('span');
    subtitle.textContent = `${category.id === 'administration' ? 'COMMAND' : category.id === 'introduction' ? 'START' : `0${route.indexOf(category.id) + 1}`} / ${String(category.entries.length).padStart(2, '0')}`;
    button.append(title, subtitle);
    button.addEventListener('click', () => onCategory(category.id));
    labels.append(button);
    anchors.push({ button, object: anchor, category: category.id });

    for (let ring = 0; ring < Math.ceil(category.entries.length / 10); ring++) {
      const radius = 6.5 + ring * 2;
      path(Array.from({ length: 120 }, (_, index) => {
        const angle = index / 120 * Math.PI * 2;
        return new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius * 0.22, Math.sin(angle) * radius);
      }), category.color, 0.32, group, true);
    }

    category.entries.forEach((entry, index) => {
      const ring = Math.floor(index / 10);
      const count = Math.min(10, category.entries.length - ring * 10);
      const angle = (index % 10) / count * Math.PI * 2;
      const radius = 6.5 + ring * 2;
      const satellite = new THREE.Group();
      satellite.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius * 0.22, Math.sin(angle) * radius);
      const satelliteModel = models.satellite(category.color, index);
      satellite.add(satelliteModel);
      group.add(satellite);
      missions.push({ category: category.id, slug: entry.slug, group: satellite, model: satelliteModel });
      const anchor = new THREE.Object3D();
      anchor.position.y = -1.05;
      satellite.add(anchor);
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'galaxy-satellite';
      button.style.setProperty('--sector-color', category.color);
      button.setAttribute('aria-label', entry.title);
      button.title = entry.title;
      const number = document.createElement('span');
      number.textContent = String(index + 1).padStart(2, '0');
      const name = document.createElement('span');
      name.className = 'galaxy-satellite-title';
      name.textContent = entry.title;
      button.append(number, name);
      button.addEventListener('click', () => onEntry(category.id, entry.slug));
      labels.append(button);
      anchors.push({ button, object: anchor, category: category.id, slug: entry.slug });
    });
  }

  function dockingMission() {
    const available = missions.filter((mission) => allowed.has(mission.slug) && (!active || mission.category === active));
    return available.find((mission) => mission.slug === selectedSlug)
      ?? (!active ? available.find((mission) => mission === courierMission) : undefined)
      ?? available[0];
  }

  function dockCourier(mission: Mission | undefined, animate: boolean) {
    const previous = courierMission;
    courierMission = mission;
    courierMoving = false;
    if (!mission) {
      courier.visible = false;
      return;
    }
    const satellite = mission.group.getWorldPosition(new THREE.Vector3());
    const offset = mission.group.position.clone().setY(0).normalize().multiplyScalar(1.8);
    offset.y = 0.9;
    courierTarget.copy(satellite).add(offset);
    courierOrientation.setFromRotationMatrix(new THREE.Matrix4().lookAt(courierTarget, satellite, new THREE.Vector3(0, 1, 0)));
    courierStart.copy(courier.position);
    courierMoving = animate && courier.visible && motion && !reducedMotion.matches && courierStart.distanceTo(courierTarget) > 0.05;
    courierOrbitCenter = previous?.category === mission.category
      ? mission.group.parent!.getWorldPosition(new THREE.Vector3()) : null;
    courier.visible = true;
    if (!courierMoving) {
      courier.position.copy(courierTarget);
      courier.quaternion.copy(courierOrientation);
    }
  }

  function flyTo(target: THREE.Vector3, radius: number, overview = false, withCourier = false, mission = dockingMission()) {
    startCamera.copy(camera.position);
    startTarget.copy(controls.target);
    desiredTarget.copy(target);
    const horizontalFov = 2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.aspect);
    const limitingFov = Math.min(THREE.MathUtils.degToRad(camera.fov), horizontalFov);
    const distance = THREE.MathUtils.clamp(
      radius / Math.sin(limitingFov / 2) * (overview ? 1.08 : 1.2),
      controls.minDistance, controls.maxDistance,
    );
    desiredCamera.copy(target).add(new THREE.Vector3(0.45, 0.55, 1).normalize().multiplyScalar(distance));
    dockCourier(mission, withCourier);
    flightProgress = 0;
    flying = true;
    schedule();
  }

  function resetView(withCourier = false, mission = dockingMission()) {
    const destination = destinations.find(({ category }) => category.id === active);
    if (destination) {
      const target = destination.group.position.clone().add(new THREE.Vector3(0, Math.max(1.2, destination.height / 2), 0));
      flyTo(target, Math.max(destination.radius + 1, destination.height + 1.2), false, withCourier, mission);
    }
    else flyTo(new THREE.Vector3(0, 1, 0), camera.aspect < 1 ? 46 : 30, true, withCourier, mission);
  }

  function animate(time: number) {
    frame = 0;
    if (disposed || !visible || document.hidden) return;
    const dt = Math.min(0.05, (time - lastTime) / 1000 || 0.016);
    lastTime = time;
    if (flying || courierMoving) {
      flightProgress = reducedMotion.matches || (courierMoving && !motion)
        ? 1 : 1 - (1 - flightProgress) * Math.exp(-5 * dt);
      if (flightProgress > 0.9999) flightProgress = 1;
      flightArc.set(0, 0, 0);
      if (courierMoving) {
        const next = new THREE.Vector3().lerpVectors(courierStart, courierTarget, flightProgress);
        if (courierOrbitCenter) {
          // Follow the outside of the orbit rather than cutting through the planet.
          const from = courierStart.clone().sub(courierOrbitCenter);
          const to = courierTarget.clone().sub(courierOrbitCenter);
          const startAngle = Math.atan2(from.z, from.x);
          const delta = Math.atan2(Math.sin(Math.atan2(to.z, to.x) - startAngle), Math.cos(Math.atan2(to.z, to.x) - startAngle));
          const angle = startAngle + delta * flightProgress;
          const radius = THREE.MathUtils.lerp(Math.hypot(from.x, from.z), Math.hypot(to.x, to.z), flightProgress);
          flightArc.set(
            courierOrbitCenter.x + Math.cos(angle) * radius - next.x,
            Math.sin(flightProgress * Math.PI) * 0.8,
            courierOrbitCenter.z + Math.sin(angle) * radius - next.z,
          );
        } else {
          flightArc.y = Math.sin(flightProgress * Math.PI) * Math.min(8, courierStart.distanceTo(courierTarget) * 0.15);
        }
        next.add(flightArc);
        const direction = next.clone().sub(courier.position);
        if (direction.lengthSq() > 0.000001 && flightProgress < 0.85) {
          const facing = new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().lookAt(courier.position, next, new THREE.Vector3(0, 1, 0)));
          courier.quaternion.slerp(facing, 1 - Math.exp(-8 * dt));
        } else {
          courier.quaternion.slerp(courierOrientation, 1 - Math.exp(-10 * dt));
        }
        courier.position.copy(next);
      }
      if (flying) {
        camera.position.lerpVectors(startCamera, desiredCamera, flightProgress).add(flightArc);
        controls.target.lerpVectors(startTarget, desiredTarget, flightProgress).add(flightArc);
        controls.update();
      }
      if (flightProgress === 1) {
        flying = false;
        courierMoving = false;
        if (courier.visible) courier.quaternion.copy(courierOrientation);
      }
    }
    courierExhaust.scale.z = courierMoving ? 0.9 + Math.sin(time * 0.035) * 0.16 : 0.12;
    const animateAmbient = motion && !reducedMotion.matches;
    const animateModels = animateAmbient && !interacting && !hovering;
    if (animateAmbient) {
      ambientTime += dt;
      sunMaterial.uniforms.time.value = ambientTime;
      solarCore.rotation.y += dt * 0.08;
      corona.forEach((flare, index) => { flare.rotation.z += dt * (0.05 + index * 0.025); });
      for (const { mesh, base, phase } of fireflies) {
        mesh.position.set(
          base.x + Math.sin(ambientTime * 0.18 + phase) * 1.2,
          base.y + Math.sin(ambientTime * 0.4 + phase) * 0.9,
          base.z + Math.cos(ambientTime * 0.16 + phase) * 1.2,
        );
      }
    }
    if (animateModels) {
      for (const { model, category } of destinations) {
        if (category.id !== 'administration' && category.id !== 'introduction') model.rotation.y += dt * 0.06;
      }
      for (const mission of missions) mission.model.rotation.y += dt * 0.14;
    }
    scene.updateMatrixWorld();
    camera.updateMatrixWorld();
    camera.getWorldDirection(cameraForward);
    onCameraPose({
      position: [camera.position.x, camera.position.y, camera.position.z],
      forward: [cameraForward.x, cameraForward.y, cameraForward.z],
      up: [camera.up.x, camera.up.y, camera.up.z],
    });
    for (const anchor of anchors) {
      anchor.object.getWorldPosition(projection).project(camera);
      const show = projection.z > -1 && projection.z < 1 && Math.abs(projection.x) < 0.95 && Math.abs(projection.y) < 0.94
        && (anchor.slug ? active === anchor.category && allowed.has(anchor.slug) : !active || active === anchor.category);
      anchor.button.hidden = !show;
      anchor.button.style.left = `${(projection.x * 0.5 + 0.5) * width}px`;
      anchor.button.style.top = `${(-projection.y * 0.5 + 0.5) * height}px`;
      anchor.button.setAttribute('aria-pressed', String(anchor.slug ? anchor.slug === selectedSlug : active === anchor.category));
    }
    composer.render();
    if (flying || courierMoving || animateAmbient) schedule();
  }

  function schedule() {
    if (!disposed && !frame && visible && !document.hidden) frame = requestAnimationFrame(animate);
  }

  function resize() {
    width = host.clientWidth;
    height = host.clientHeight;
    if (!width || !height) return;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
    composer.setSize(width, height);
    resetView();
  }

  function pick(event: PointerEvent) {
    const bounds = renderer.domElement.getBoundingClientRect();
    pointer.set((event.clientX - bounds.left) / width * 2 - 1, -(event.clientY - bounds.top) / height * 2 + 1);
    raycaster.setFromCamera(pointer, camera);
    const selectable: THREE.Object3D[] = [solarSun, ...destinations.map(({ model }) => model), ...missions.filter((mission) => allowed.has(mission.slug)).map(({ model }) => model)];
    const hit = raycaster.intersectObjects(selectable, true)[0];
    if (!hit) return null;
    let object: THREE.Object3D | null = hit.object;
    while (object && !selectable.includes(object)) object = object.parent;
    return object;
  }

  const events = new AbortController();
  const { signal } = events;
  let down: { x: number; y: number } | null = null;
  renderer.domElement.addEventListener('pointerdown', (event) => {
    if (!event.isPrimary) return;
    down = { x: event.clientX, y: event.clientY };
  }, { signal });
  renderer.domElement.addEventListener('pointermove', (event) => {
    if (!interacting) renderer.domElement.style.cursor = pick(event) ? 'pointer' : 'grab';
  }, { signal });
  renderer.domElement.addEventListener('pointerup', (event) => {
    const start = down;
    down = null;
    if (!start || Math.hypot(event.clientX - start.x, event.clientY - start.y) > 5) return;
    const object = pick(event);
    const mission = missions.find(({ model }) => model === object);
    if (object === solarSun) onOverview();
    else if (mission) onEntry(mission.category, mission.slug);
    else {
      const destination = destinations.find(({ model }) => model === object);
      if (destination) onCategory(destination.category.id);
    }
  }, { signal });
  renderer.domElement.addEventListener('pointercancel', () => { down = null; }, { signal });
  host.addEventListener('pointerenter', () => { hovering = true; }, { signal });
  host.addEventListener('pointerleave', () => { hovering = false; schedule(); }, { signal });
  controls.addEventListener('start', () => { interacting = true; flying = false; });
  controls.addEventListener('end', () => { interacting = false; schedule(); });
  controls.addEventListener('change', schedule);
  renderer.domElement.addEventListener('webglcontextlost', (event) => {
    event.preventDefault();
    onError(new Error('WebGL context lost'));
  }, { signal });
  document.addEventListener('visibilitychange', schedule, { signal });
  reducedMotion.addEventListener('change', schedule, { signal });
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(host);
  const intersectionObserver = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) schedule();
  });
  intersectionObserver.observe(host);
  resize();
  camera.position.copy(desiredCamera);
  controls.target.copy(desiredTarget);
  flying = false;
  flightProgress = 1;
  controls.update();

  return {
    focus(id: CategoryId | null, withCourier = false) {
      const journey = withCourier && (id !== active || selectedSlug !== null);
      active = id;
      selectedSlug = null;
      selectionRing.visible = false;
      resetView(journey, active ? missions.find((mission) => mission.category === active) : dockingMission());
    },
    filter(slugs: Set<string>) {
      allowed = slugs;
      for (const mission of missions) mission.group.visible = allowed.has(mission.slug);
      const dock = dockingMission();
      if (dock !== courierMission) resetView(false, dock);
      schedule();
    },
    select(slug: string | null) {
      if (slug === selectedSlug) return;
      selectedSlug = slug;
      const mission = missions.find((item) => item.slug === slug);
      selectionRing.visible = Boolean(mission);
      if (mission) {
        scene.updateMatrixWorld();
        const position = mission.group.getWorldPosition(new THREE.Vector3());
        selectionRing.position.copy(position).add(new THREE.Vector3(0, -0.4, 0));
        flyTo(position, 3.8, false, true, mission);
      } else resetView(true);
      schedule();
    },
    rotate(direction: number) {
      flying = false;
      const offset = camera.position.clone().sub(controls.target).applyAxisAngle(new THREE.Vector3(0, 1, 0), direction * Math.PI / 8);
      camera.position.copy(controls.target).add(offset);
      controls.update();
      schedule();
    },
    tilt(direction: number) {
      flying = false;
      const sphere = new THREE.Spherical().setFromVector3(camera.position.clone().sub(controls.target));
      sphere.phi = THREE.MathUtils.clamp(sphere.phi + direction * 0.2, controls.minPolarAngle, controls.maxPolarAngle);
      camera.position.copy(controls.target).add(new THREE.Vector3().setFromSpherical(sphere));
      controls.update();
      schedule();
    },
    zoom(direction: number) {
      flying = false;
      const offset = camera.position.clone().sub(controls.target);
      offset.setLength(THREE.MathUtils.clamp(offset.length() * (1 + direction * 0.15), controls.minDistance, controls.maxDistance));
      camera.position.copy(controls.target).add(offset);
      controls.update();
      schedule();
    },
    motion(enabled: boolean) {
      motion = enabled;
      schedule();
    },
    dispose() {
      disposed = true;
      events.abort();
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      controls.dispose();
      renderPass.dispose();
      bloom.dispose();
      outputPass.dispose();
      composer.dispose();
      models.dispose();
      geometries.forEach((geometry) => geometry.dispose());
      materials.forEach((material) => material.dispose());
      keyLight.shadow.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      renderer.domElement.remove();
      labels.remove();
    },
  };
}

export type GalaxyScene = ReturnType<typeof createGalaxyScene>;
