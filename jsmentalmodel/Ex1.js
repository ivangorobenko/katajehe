const arr = [212, 8, 506];
arr[0] = 100;
const otherArr = arr;

otherArr[0] = 9;

console.log(arr);
console.log(otherArr);
console.log(arr === otherArr);
