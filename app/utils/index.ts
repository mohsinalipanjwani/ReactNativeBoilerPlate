export const capitalizeFirstLetter = (s: string) =>
  s.charAt(0).toUpperCase() + s.slice(1);

export function getTwoDigitNumber(value: number) {
  return value && value >= 10 ? String(value) : 0 + String(value);
}
