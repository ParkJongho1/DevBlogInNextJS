// Programmers
// 두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요..
// One a day! 0단계부터 하루에 하나이상!!!

function solution(s1, s2) {
   return s1.filter((e) => s2.includes(e)).length;
}
