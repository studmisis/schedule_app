// пока что так, потом будет понятнее надо или нет

const isStandalone =
  window.matchMedia('(display-mode: standalone)').matches ||
  window.navigator.standalone === true;

export const APP_MODE = isStandalone ? 'standalone' : 'browser';

export const IS_PWA = isStandalone;

export const IS_BROWSER = !isStandalone;