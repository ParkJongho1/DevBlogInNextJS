// Programmers
// 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.
// One a day! 0단계부터 하루에 하나이상!!!

function solution(my_string, n) {
   var answer = [...my_string].map((a) => a.repeat(n)).join("");
   return answer;
}
