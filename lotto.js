/*

1부터 45까지의 숫자 중, 6개를 '비복원추출'한다.

> []

(힌트) lodash를 활용하면 간단히 가능

*/

const _ = require("lodash");

// let lottoNum = [];
// for (let i = 1; i < 46; i++) {
//   lottoNum.push(i);
// }

let num = _.range(1, 46);

const winner = [1, 15, 19, 23, 28, 42];

// const allNum = [];
// for (let i = 0; allNum.length < 6; i++) {
//   const getNum = _.sample(lottoNum);
//   allNum.push(getNum);
//   lottoNum.pop(getNum);
// }
// console.log(allNum);

const lottoNum = _.sortBy(_.sampleSize(num, 6));

// 6개를 맞추면 1등
// 5개 맞추면 3등
// 4개 맞추면 4등
// 3개 맞추면 5등
// 나머지 꽝
// let cnt;
// lottoNum.forEach(function(winner) {
//   if (winner.includes(winner)) {
//     cnt += 1;
//   }
// });

// console.log(cnt);

// console.log(_.intersection(lottoNum, winner));

const cnt = _.intersection(lottoNum, winner).length;

let rank = "";

if (cnt === 6) {
  rank = "1등입니다";
} else if (cnt === 5) {
  rank = "3등입니다";
} else if (cnt === 4) {
}
