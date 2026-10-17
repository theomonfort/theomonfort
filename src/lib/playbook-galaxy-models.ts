import * as THREE from 'three';
import type { CategoryId } from './playbook-categories';

// Original procedural models: every landmark is solid geometry, not a billboard.
export function createGalaxyModels() {
  const geometries = new Set<THREE.BufferGeometry>();
  const materials = new Map<string, THREE.MeshStandardMaterial>();
  const boxGeometry = geometry(new THREE.BoxGeometry(1, 1, 1));
  const crystalGeometry = geometry(new THREE.OctahedronGeometry(1));

  function geometry<T extends THREE.BufferGeometry>(value: T): T {
    geometries.add(value);
    return value;
  }

  function material(color: string, glow = false) {
    const key = `${color}:${glow}`;
    let value = materials.get(key);
    if (!value) {
      value = new THREE.MeshStandardMaterial({
        color,
        roughness: glow ? 0.35 : 0.72,
        metalness: glow ? 0.25 : 0.3,
        flatShading: true,
        emissive: glow ? color : '#000000',
        emissiveIntensity: glow ? 2.2 : 0,
      });
      materials.set(key, value);
    }
    return value;
  }

  function mesh(parent: THREE.Group, shape: THREE.BufferGeometry, color: string, position: [number, number, number], scale: [number, number, number] = [1, 1, 1], glow = false) {
    const object = new THREE.Mesh(shape, material(color, glow));
    object.position.set(...position);
    object.scale.set(...scale);
    object.castShadow = !glow;
    object.receiveShadow = !glow;
    parent.add(object);
    return object;
  }

  function box(parent: THREE.Group, color: string, position: [number, number, number], scale: [number, number, number], glow = false) {
    return mesh(parent, boxGeometry, color, position, scale, glow);
  }

  function cylinder(parent: THREE.Group, color: string, position: [number, number, number], top: number, bottom: number, height: number, segments = 12, glow = false) {
    return mesh(parent, geometry(new THREE.CylinderGeometry(top, bottom, height, segments)), color, position, [1, 1, 1], glow);
  }

  function ring(parent: THREE.Group, color: string, position: [number, number, number], radius: number, tube = 0.04, glow = true) {
    return mesh(parent, geometry(new THREE.TorusGeometry(radius, tube, 6, 64)), color, position, [1, 1, 1], glow);
  }

  function windows(parent: THREE.Group, x: number, y: number, z: number, width: number, rows: number, color: string) {
    for (let row = 0; row < rows; row++) {
      for (let column = 0; column < 3; column++) {
        box(parent, color, [x + (column - 1) * width / 3, y + row * 0.32, z], [width / 6, 0.1, 0.035], true);
      }
    }
  }

  function tree(parent: THREE.Group, x: number, z: number, scale = 1) {
    box(parent, '#775040', [x, 1.6 + scale * 0.2, z], [0.16 * scale, 0.9 * scale, 0.16 * scale]);
    mesh(parent, crystalGeometry, '#5fb36e', [x, 1.8 + scale * 0.5, z], [0.5 * scale, 0.8 * scale, 0.5 * scale]);
  }

  function dish(parent: THREE.Group, x: number, y: number, z: number, color: string, size = 1) {
    const group = new THREE.Group();
    group.position.set(x, y, z);
    group.scale.setScalar(size);
    group.rotation.x = -0.55;
    parent.add(group);
    mesh(group, geometry(new THREE.SphereGeometry(0.75, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2)), '#b4c3df', [0, 0, 0], [1, 0.28, 1]);
    ring(group, color, [0, 0, 0], 0.77, 0.025).rotation.x = Math.PI / 2;
    cylinder(group, '#a7b7cd', [0, 0.32, 0], 0.03, 0.03, 0.65, 6);
    mesh(group, crystalGeometry, color, [0, 0.7, 0], [0.09, 0.09, 0.09], true);
  }

  function planet(id: Exclude<CategoryId, 'introduction' | 'administration'>, accent: string) {
    const group = new THREE.Group();
    group.name = `planet-${id}`;
    const rock = geometry(new THREE.IcosahedronGeometry(2.4, 2));
    const vertices = rock.getAttribute('position');
    for (let index = 0; index < vertices.count; index++) vertices.setY(index, Math.min(1.05, vertices.getY(index)));
    rock.computeVertexNormals();
    const terrain = {
      plan: ['#284a48', '#57794d'],
      develop: ['#382b32', '#514039'],
      review: ['#946641', '#d6ac6a'],
      secure: ['#354463', '#62758f'],
      operate: ['#284a48', '#57794d'],
    } as const;
    const [bedrock, surface] = terrain[id];
    mesh(group, rock, bedrock, [0, 0, 0]);
    cylinder(group, surface, [0, 1.13, 0], 2.12, 2.04, 0.2, 16);
    const equator = ring(group, accent, [0, -0.8, 0], 2.95, 0.035);
    equator.rotation.set(1.2, 0.25, 0.12);
    for (let index = 0; index < 7; index++) {
      const angle = index / 7 * Math.PI * 2;
      mesh(group, crystalGeometry, accent, [Math.cos(angle) * 1.8, -1.25, Math.sin(angle) * 1.8], [0.09, 0.25, 0.09], true);
    }

    if (id === 'plan') {
      cylinder(group, '#d6bc7a', [0, 1.4, 0], 1.3, 1.5, 0.35);
      cylinder(group, '#496f6d', [0, 2.0, 0], 1.12, 1.12, 0.95);
      for (let index = 0; index < 8; index++) {
        const a = index / 8 * Math.PI * 2;
        box(group, '#d6bc7a', [Math.cos(a) * 1.1, 2.1, Math.sin(a) * 1.1], [0.1, 1.3, 0.1]);
      }
      mesh(group, geometry(new THREE.SphereGeometry(1.15, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2)), '#9bbc70', [0, 2.55, 0], [1, 0.85, 1]);
      for (let index = 0; index < 4; index++) {
        const arch = mesh(group, geometry(new THREE.TorusGeometry(1.17, 0.035, 6, 32, Math.PI)), '#f1d291', [0, 2.55, 0]);
        arch.rotation.y = index * Math.PI / 4;
        arch.scale.y = 0.85;
      }
      cylinder(group, '#d6bc7a', [0, 3.85, 0], 0, 0.22, 0.7, 6);
      tree(group, -1.5, 0.5, 0.65);
      tree(group, 1.4, -0.9, 0.8);
      box(group, accent, [0, 2.1, 1.135], [0.6, 0.4, 0.05], true);
    } else if (id === 'develop') {
      const profile = [[1.95, 0], [1.55, 0.65], [0.85, 2.45], [0.72, 2.65], [0.53, 2.5], [0.45, 2.2]];
      mesh(group, geometry(new THREE.LatheGeometry(profile.map(([r, y]) => new THREE.Vector2(r, y)), 12)),
        '#59413b', [0, 1.23, 0]).name = 'volcano-crater';
      cylinder(group, '#ff6a18', [0, 3.47, 0], 0.46, 0.46, 0.08, 12, true);
      for (let index = 0; index < 4; index++) {
        const angle = index * Math.PI / 2 + 0.3;
        const points = [[0.75, 3.9], [0.88, 3.65], [1.12, 3.08], [1.36, 2.5], [1.6, 1.92], [1.98, 1.28]];
        const curve = new THREE.CatmullRomCurve3(points.map(([r, y], step) => {
          const bend = angle + Math.sin(step * 1.6 + index) * 0.09;
          return new THREE.Vector3(Math.cos(bend) * r, y, Math.sin(bend) * r);
        }));
        mesh(group, geometry(new THREE.TubeGeometry(curve, 24, 0.065, 5, false)),
          '#ff7518', [0, 0, 0], [1, 1, 1], true).name = 'lava-flow';
      }
      const rubble = geometry(new THREE.IcosahedronGeometry(1, 0));
      for (let index = 0; index < 7; index++) {
        const angle = index * 2.4;
        mesh(group, rubble, '#322b31', [Math.cos(angle) * 1.85, 1.35, Math.sin(angle) * 1.85], [0.3, 0.25, 0.25]);
      }
      for (let index = 0; index < 4; index++) {
        mesh(group, rubble, index % 2 ? '#65545d' : '#887477',
          [index * 0.18 - 0.1, 4.35 + index * 0.5, -index * 0.12], [0.25 + index * 0.07, 0.3, 0.25 + index * 0.06]);
        mesh(group, crystalGeometry, '#ffb000', [Math.sin(index * 2) * 0.6, 4.05 + index * 0.42, Math.cos(index * 2) * 0.5],
          [0.055, 0.11, 0.055], true);
      }
    } else if (id === 'review') {
      const dune = geometry(new THREE.IcosahedronGeometry(1, 1));
      for (let index = 0; index < 6; index++) {
        const angle = index * Math.PI / 3;
        mesh(group, dune, index % 2 ? '#dfb773' : '#c68d50',
          [Math.cos(angle) * 1.4, 1.25, Math.sin(angle) * 1.4], [0.75, 0.27, 0.55]).rotation.y = angle;
      }
      box(group, '#b8844f', [0, 1.45, 0], [1.9, 0.45, 1.9]);
      box(group, '#e2be82', [0, 3.7, 0], [1.25, 4.3, 1.25]).name = 'desert-tower';
      for (const x of [-0.67, 0.67]) for (const z of [-0.67, 0.67]) {
        box(group, '#c79457', [x, 3.65, z], [0.22, 4.2, 0.22]);
      }
      for (let floor = 0; floor < 3; floor++) {
        const y = 2.35 + floor * 1.15;
        for (const side of [-1, 1]) {
          box(group, '#493324', [0, y, side * 0.636], [0.19, 0.5, 0.025]);
          box(group, '#493324', [side * 0.636, y, 0], [0.025, 0.5, 0.19]);
        }
        box(group, '#b8844f', [0, y + 0.4, 0], [1.4, 0.13, 1.4]);
      }
      box(group, '#e9c78c', [0, 5.9, 0], [1.75, 0.3, 1.75]);
      for (let index = -1; index <= 1; index++) for (const side of [-1, 1]) {
        box(group, '#d3a363', [index * 0.65, 6.25, side * 0.72], [0.3, 0.5, 0.3]);
        if (index === 0) box(group, '#d3a363', [side * 0.72, 6.25, 0], [0.3, 0.5, 0.3]);
      }
      box(group, '#493324', [0, 1.92, 0.64], [0.42, 0.74, 0.04]);
      cylinder(group, '#7a573d', [0, 6.65, 0], 0.035, 0.035, 1.5, 6);
      box(group, '#ffb000', [0.3, 7.1, 0], [0.6, 0.34, 0.05]);
      for (let index = 0; index < 3; index++) {
        cylinder(group, '#ba894f', [-1.5 + index * 0.3, 1.55 + index * 0.1, -0.95],
          0.12, 0.16, 0.65 + index * 0.2, 6);
      }
    } else if (id === 'secure') {
      box(group, '#526480', [0, 1.75, 0], [2.6, 1, 2.2]);
      box(group, '#1b2945', [0, 1.7, 1.13], [0.65, 0.9, 0.04]);
      for (const x of [-1.05, 1.05]) for (const z of [-0.85, 0.85]) {
        box(group, '#8495ae', [x, 2.45, z], [0.65, 2.35, 0.65]);
        cylinder(group, '#51607a', [x, 3.9, z], 0, 0.57, 0.65, 4);
        box(group, accent, [x, 3.1, z + 0.34], [0.18, 0.35, 0.03], true);
      }
      const shield = new THREE.Shape();
      shield.moveTo(-0.6, 0.45); shield.lineTo(0, 0.7); shield.lineTo(0.6, 0.45);
      shield.lineTo(0.48, -0.25); shield.lineTo(0, -0.65); shield.lineTo(-0.48, -0.25); shield.closePath();
      mesh(group, geometry(new THREE.ExtrudeGeometry(shield, { depth: 0.2, bevelEnabled: false })), accent, [0, 3.25, 1.4], [1, 1, 1], true);
      box(group, '#edf2fd', [0, 3.3, 1.64], [0.13, 0.55, 0.08]);
    } else {
      cylinder(group, '#785035', [0, 3.05, 0], 0.3, 0.65, 3.65, 9).name = 'great-tree-trunk';
      const foliage = geometry(new THREE.IcosahedronGeometry(1, 1));
      function limb(from: THREE.Vector3, to: THREE.Vector3, top: number, bottom: number) {
        const midpoint = from.clone().add(to).multiplyScalar(0.5);
        const object = cylinder(group, '#785035', [midpoint.x, midpoint.y, midpoint.z], top, bottom, from.distanceTo(to), 7);
        object.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), to.clone().sub(from).normalize());
      }
      for (let index = 0; index < 6; index++) {
        const angle = index * Math.PI / 3;
        const x = Math.cos(angle);
        const z = Math.sin(angle);
        limb(new THREE.Vector3(x * 1.7, 1.27, z * 1.7), new THREE.Vector3(x * 0.2, 2, z * 0.2), 0.28, 0.1);
        const crown = new THREE.Vector3(x * 1.45, 4.85 + index % 2 * 0.5, z * 1.45);
        limb(new THREE.Vector3(0, 3.1 + index % 2 * 0.55, 0), crown, 0.12, 0.28);
        mesh(group, foliage, index % 2 ? '#619b42' : '#37754a',
          [crown.x, crown.y + 0.4, crown.z], [1.25, 1.1, 1.2]).name = 'great-tree-canopy';
        mesh(group, crystalGeometry, '#b7d86b', [crown.x, crown.y - 0.5, crown.z],
          [0.08, 0.15, 0.08], true);
      }
      mesh(group, foliage, '#86b64e', [0, 6.3, 0], [1.55, 1.4, 1.45]).name = 'great-tree-canopy';
      tree(group, -1.4, 0.9, 0.45);
      tree(group, 1.2, -1.1, 0.55);
    }
    return group;
  }

  function station(accent: string) {
    const group = new THREE.Group();
    group.name = 'departure-station';
    cylinder(group, '#526480', [0, -0.35, 0], 2.2, 1.6, 0.65, 8);
    ring(group, accent, [0, 0.02, 0], 2.12, 0.04).rotation.x = Math.PI / 2;
    ring(group, '#b4c3df', [0, 2, 0], 1.8, 0.24, false);
    ring(group, accent, [0, 2, 0.08], 1.52, 0.1);
    for (let index = 0; index < 8; index++) {
      const a = index / 8 * Math.PI * 2;
      box(group, '#465676', [Math.cos(a) * 1.82, 2 + Math.sin(a) * 1.82, 0], [0.42, 0.42, 0.6]).rotation.z = a;
    }
    box(group, '#8495ae', [0, 0, 2], [1.1, 0.16, 2.4]);
    for (let index = 0; index < 6; index++) {
      box(group, accent, [-0.4, 0.13, 1 + index * 0.38], [0.06, 0.04, 0.16], true);
      box(group, accent, [0.4, 0.13, 1 + index * 0.38], [0.06, 0.04, 0.16], true);
    }
    return group;
  }

  function mothership(accent: string) {
    const group = new THREE.Group();
    group.name = 'administration-mothership';
    const hullShape = new THREE.Shape();
    hullShape.moveTo(0, 5); hullShape.lineTo(1.45, 2.5); hullShape.lineTo(1.4, -3.6);
    hullShape.lineTo(-1.4, -3.6); hullShape.lineTo(-1.45, 2.5); hullShape.closePath();
    const hull = mesh(group, geometry(new THREE.ExtrudeGeometry(hullShape, { depth: 0.85, bevelEnabled: true, bevelSize: 0.22, bevelThickness: 0.2, bevelSegments: 1, steps: 1 })), '#64485d', [0, 0, 0]);
    hull.rotation.x = -Math.PI / 2;
    box(group, '#b29460', [0, 0.95, -0.6], [1.9, 0.15, 6.6]);
    box(group, '#394961', [0, 1.3, 0.8], [1.6, 0.65, 3.6]);
    box(group, '#9aa8bc', [0, 1.9, 1], [1.25, 0.6, 1.3]);
    windows(group, 0, 1.83, 1.67, 1, 2, '#00f0ff');
    for (const x of [-2.2, 2.2]) {
      box(group, '#8b745a', [x / 2, 0.35, 1], [2.4, 0.22, 1.5]);
      box(group, '#4a4563', [x, 0.4, 1.1], [0.75, 0.8, 4.1]);
      box(group, accent, [x, 0.84, 0.3], [0.2, 0.05, 1.6], true);
      const engine = cylinder(group, '#8090a9', [x, 0.4, 3.3], 0.4, 0.5, 0.8, 10);
      engine.rotation.x = Math.PI / 2;
      const fire = cylinder(group, '#00f0ff', [x, 0.4, 4.2], 0.3, 0.05, 1.4, 8, true);
      fire.rotation.x = Math.PI / 2;
      cylinder(group, '#aa8a54', [x / 2, 1.55, 2.2], 0.3, 0.42, 1.65, 8);
      cylinder(group, '#d3b373', [x / 2, 2.8, 2.2], 0, 0.47, 1, 8);
    }
    box(group, '#00f0ff', [0, 1.08, -2.7], [0.8, 0.035, 1.5], true);
    dish(group, 0, 2.5, 0.8, accent, 0.65);
    group.rotation.y = -0.55;
    return group;
  }

  function courier() {
    const group = new THREE.Group();
    group.name = 'navigation-courier';
    box(group, '#c5cfdf', [0, 0, 0], [0.42, 0.28, 1.25]);
    const nose = cylinder(group, '#edf2fd', [0, 0, -0.85], 0, 0.29, 0.7, 4);
    nose.rotation.x = -Math.PI / 2;
    mesh(group, crystalGeometry, '#00c7dc', [0, 0.2, -0.28], [0.18, 0.14, 0.36]);
    const wing = new THREE.Shape();
    wing.moveTo(-0.18, -0.45); wing.lineTo(-1.05, 0.65); wing.lineTo(-0.3, 0.45);
    wing.lineTo(0, 0.65); wing.lineTo(0.3, 0.45); wing.lineTo(1.05, 0.65);
    wing.lineTo(0.18, -0.45); wing.closePath();
    mesh(group, geometry(new THREE.ExtrudeGeometry(wing, { depth: 0.08, bevelEnabled: false })),
      '#7d95b5', [0, 0.03, 0]).rotation.x = Math.PI / 2;
    const exhaust = new THREE.Group();
    exhaust.name = 'courier-exhaust';
    exhaust.position.z = 0.9;
    group.add(exhaust);
    for (const x of [-0.48, 0.48]) {
      cylinder(group, '#b4c3df', [x, 0, 0.55], 0.16, 0.16, 0.65, 8).rotation.x = Math.PI / 2;
      cylinder(exhaust, '#00f0ff', [x, 0, 0.35], 0, 0.12, 0.7, 8, true).rotation.x = Math.PI / 2;
      box(group, '#ffb000', [x * 1.65, 0.08, 0.48], [0.13, 0.035, 0.2], true);
    }
    return group;
  }

  function satellite(accent: string, index: number) {
    const group = new THREE.Group();
    group.name = 'mission-satellite';
    box(group, '#c5cfdf', [0, 0, 0], [0.55, 0.6, 0.55]);
    box(group, accent, [0, 0, 0.29], [0.32, 0.32, 0.03], true);
    if (index % 3 === 0) {
      box(group, '#9aa8bc', [0, 0, 0], [2.2, 0.07, 0.08]);
      for (const x of [-0.85, 0.85]) {
        box(group, '#303e69', [x, 0.02, 0], [0.85, 0.05, 0.8]);
        for (let stripe = 0; stripe < 3; stripe++) box(group, accent, [x - 0.26 + stripe * 0.26, 0.055, 0], [0.12, 0.015, 0.65], true);
      }
    } else if (index % 3 === 1) {
      cylinder(group, '#b29460', [0, 0.55, 0], 0.07, 0.1, 0.5, 6);
      dish(group, 0, 0.75, 0, accent, 0.55);
    } else {
      mesh(group, crystalGeometry, '#b29460', [0, -0.4, 0], [0.35, 0.6, 0.35]);
      ring(group, accent, [0, 0.1, 0], 0.58, 0.035).rotation.x = Math.PI / 3;
    }
    group.rotation.y = index * 0.85;
    return group;
  }

  return {
    destination: (id: CategoryId, accent: string) => id === 'administration' ? mothership(accent) : id === 'introduction' ? station(accent) : planet(id, accent),
    courier,
    satellite,
    dispose() {
      geometries.forEach((value) => value.dispose());
      materials.forEach((value) => value.dispose());
    },
  };
}
