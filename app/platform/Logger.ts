export function Log(...args: unknown[]) {
  if (!__DEV__) {
    return;
  }
  console.log(...args);
}

export function Warn(...args: any[]) {
  if (!__DEV__) {
    return;
  }
  console.warn(...args);
}

export function Error(...args: any[]) {
  if (!__DEV__) {
    return;
  }
  console.warn(...args);
}
