// function implement binary search algorithm
// return index of the element if found
// return -1 if not found

f// Path: src\calculation.ts
// function implement binary search algorithm
// return index of the element if found
// return -1 if not found
export function binarySearch(arr: number[], element: number): number {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] === element) {
        return mid;
      } else if (arr[mid] < element) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return -1;
  }

