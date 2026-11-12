const PLAYER_SELECTOR = '[data-playbook-video]';
const initialized = new WeakSet<HTMLElement>();
const exitingFullscreen = new WeakSet<HTMLVideoElement>();

function isActive(player: HTMLElement): boolean {
  return player.isConnected && (
    !document.body.classList.contains('present-mode') ||
    player.classList.contains('akq-slide-active')
  );
}

function report(player: HTMLElement, key: 'fullscreenError' | 'playbackError' | 'mediaError', error: unknown) {
  const status = player.querySelector<HTMLElement>('[data-video-status]');
  const message = player.dataset[key];
  console.warn('[playbook-video]', message, error);
  if (status && message) {
    status.textContent = [status.textContent, message].filter(Boolean).join(' ');
    status.hidden = false;
  }
}

function exitFullscreen(player: HTMLElement, video: HTMLVideoElement) {
  if (document.fullscreenElement === video && !exitingFullscreen.has(video)) {
    exitingFullscreen.add(video);
    void document.exitFullscreen()
      .catch(error => {
        if (document.fullscreenElement === video) report(player, 'fullscreenError', error);
      })
      .finally(() => exitingFullscreen.delete(video));
  }
}

function pause(player: HTMLElement, video: HTMLVideoElement) {
  video.pause();
  exitFullscreen(player, video);
}

function load(player: HTMLElement, video: HTMLVideoElement) {
  if (video.hasAttribute('src')) return;
  const src = video.dataset.src;
  if (!src) {
    report(player, 'mediaError', new Error('Missing video data-src'));
    return;
  }
  video.src = src;
  video.load();
}

async function playFullscreen(player: HTMLElement, video: HTMLVideoElement, button: HTMLButtonElement) {
  const status = player.querySelector<HTMLElement>('[data-video-status]');
  if (status) {
    status.textContent = '';
    status.hidden = true;
  }
  load(player, video);
  button.disabled = true;
  video.focus({ preventScroll: true });

  // Both APIs must be called during the click, before awaiting either result.
  const fullscreen = (async () => {
    try {
      if (typeof video.requestFullscreen !== 'function') {
        throw new Error('Fullscreen API is unavailable');
      }
      await video.requestFullscreen();
      if (document.fullscreenElement !== video) {
        throw new Error('The video did not enter fullscreen');
      }
    } catch (error) {
      if (isActive(player)) report(player, 'fullscreenError', error);
    }
  })();
  let playbackFailed = false;
  try {
    await video.play();
  } catch (error) {
    playbackFailed = true;
    if (isActive(player)) report(player, 'playbackError', error);
  } finally {
    await fullscreen;
    button.disabled = false;
    if (playbackFailed || !isActive(player)) pause(player, video);
  }
}

export function syncPlaybookVideos() {
  document.querySelectorAll<HTMLElement>(PLAYER_SELECTOR).forEach(player => {
    const video = player.querySelector<HTMLVideoElement>('video');
    const button = player.querySelector<HTMLButtonElement>('[data-video-fullscreen]');
    if (!video || !button) {
      report(player, 'mediaError', new Error('Incomplete video player markup'));
      return;
    }
    if (!initialized.has(player)) {
      initialized.add(player);
      button.addEventListener('click', () => { void playFullscreen(player, video, button); });
      video.addEventListener('error', () => {
        pause(player, video);
        report(player, 'mediaError', video.error);
      });
      player.querySelectorAll('a').forEach(link => link.addEventListener('click', () => video.pause()));
    }
    if (isActive(player)) load(player, video);
    else pause(player, video);
  });
}

export function pausePlaybookVideos() {
  document.querySelectorAll<HTMLElement>(PLAYER_SELECTOR).forEach(player => {
    const video = player.querySelector<HTMLVideoElement>('video');
    if (video) pause(player, video);
  });
}

export function handlePlaybookVideoKey(event: KeyboardEvent): boolean {
  const video = document.fullscreenElement;
  if (video instanceof HTMLVideoElement) {
    const player = video.closest<HTMLElement>(PLAYER_SELECTOR);
    if (player) {
      if (event.key === 'Escape') {
        event.preventDefault();
        exitFullscreen(player, video);
      }
      return true;
    }
  }
  return event.composedPath().some(target =>
    target instanceof HTMLElement && !!target.closest(PLAYER_SELECTOR)
  );
}
