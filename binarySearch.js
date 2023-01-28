// Binary Search
let arr2 = [20, 24, 30, 40, 43, 74, 75, 83, 90];

function binarySearch(arr2, target) {
  let start = 0;
  let end = arr2.length - 1;
  console.log(arr2.length);
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (arr2[mid] === target) {
      return `data found ${mid}`;
    } else if (arr2[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return `data not found`;
}

console.log(binarySearch(arr2, 90));
