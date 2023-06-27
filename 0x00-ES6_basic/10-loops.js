export default function appendToEachArrayValue(array, appendString) {
  // for (var idx in array) {
  //   var value = array[idx];
  //   array[idx] = appendString + value;
  // }

  const myArray = [];
  for (const idx of array) {
    myArray.push(`${appendString}${idx}`);
  }

  return myArray;
}
