let arr = [10, 12, 23, 32, 35, 40, 56, 78, 90];
let target = 90;

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return `data found ${i}`;
    }
  }
  return `data not found`;
}

console.log(linearSearch(arr, target));
