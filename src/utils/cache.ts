const cache: { [key: string]: Promise<any> } = {};

export function getOrSetCache<T>(key: string, fn: () => Promise<T>): Promise<T> {
  return cache[key] || (cache[key] = fn());
}
