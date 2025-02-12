// Programmers
/* 정수 배열 arr과 정수 n이 매개변수로 주어집니다. arr의 길이가 홀수라면 arr의 모든 짝수 인덱스 위치에 n을 더한 배열을,
arr의 길이가 짝수라면 arr의 모든 홀수 인덱스 위치에 n을 더한 배열을 return 하는 solution 함수를 작성해 주세요. */
// One a day! 0단계부터 하루에 하나이상!!!

function solution(arr, n) {
  if (arr.length % 2 === 0) {
    return arr.map((e, i) => (i % 2 !== 0 ? e + n : e));
  } else {
    return arr.map((e, i) => (i % 2 === 0 ? e + n : e));
  }
}

//다른사람 풀이
const solution = (arr, n) =>
  arr.map((num, idx) => (arr.length % 2 !== idx % 2 ? num + n : num));
