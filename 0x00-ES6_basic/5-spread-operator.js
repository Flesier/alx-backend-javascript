export default function concatArrays(array1, array2, string) {
  const arr = [...array1, ...array2, ...string];
  return arr;
}
