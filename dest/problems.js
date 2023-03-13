"use strict";
// const merge = (
//   nums1: Array<number>,
//   m: number,
//   nums2: Array<number>,
//   n: number
// ): Array<number> => {
//   const arr = [...nums1, m, ...nums2, n];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       let p = arr.splice(i, i);
//     }
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// };
// const nums1 = [1, 2, 3, 0, 0, 0];
// const m = 3;
// const nums2 = [2, 5, 6];
// const n = 3;
// console.log(merge(nums1, m, nums2, n));
//58. Length of Last Word
// const s: string = "   fly me   to   the moon  ";
// const lengthOfLastWord = (s: string): number => {
//   const string = s.trim().split(" ");
//   const lastword = string[string.length - 1];
//   const lastwordCount = lastword.length;
//   return lastwordCount;
// };
// console.log(lengthOfLastWord(s));
