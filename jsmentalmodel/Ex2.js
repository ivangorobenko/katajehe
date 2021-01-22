const arr = [212, 8, 506];
arr[0] = 100;
const otherArr = [212, 8, 506];
otherArr[0] = 100;
console.log(arr === otherArr);
console.log(arr[0] === otherArr[0]);
