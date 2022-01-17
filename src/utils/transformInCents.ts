export function transformInCents(value: string | number) {
  if (typeof value === 'string') {
    return parseInt(value.replace(/\D/g, ''), 10);
  }

  return value * 100;
}

export function transformInReal(value: number) {
  return value / 100;
}

export default transformInCents;
