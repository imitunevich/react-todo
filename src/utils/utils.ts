export function normalizeArray<T extends { id: string }>(
  array: T[],
): { [key: string]: T } {
  return array.reduce(
    (acc, item) => {
      acc[item.id] = item;
      return acc;
    },
    {} as { [key: string]: T },
  );
}
