/* #eslint-disableguard-for-in */
/* #eslint-disableno-param-reassign */
export default function appendToEachArrayValue(array, appendString) {
  const myarray = [];
  for (const item of array) {
    myarray.push(appendString + item);
  }

  return myarray;
}
