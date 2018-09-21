export function log(str) {
  return console.log(str);
}

export function largestNum(arr = []) {
  return Math.max(...arr);
}

export function merger(arr1, arr2) {
  return { ...arr1, ...arr2 };
}
