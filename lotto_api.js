const axios = require("axios");

// https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=874

// let winner = [];
// const res = axios
//   .get("https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=874")
//   .then(response => {
//     console.log(response.data);
//     let numData = "";
//     for (let i = 1; i < 7; i++) {
//       numData = `drwtNo${i}`;
//       console.log(numData);
//       winner.push(response.data.numData);
//       console.log(winner);
//     }
//   })
//   .catch(error => {
//     console.log(error);
//   });

url = "https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=874";

axios.get(url).then(res => {
  let winner = [];
  for (let i = 1; i < 7; i++) {
    winner.push(res.data[`drwtNo${i}`]);
    console.log(winner);
  }
  console.log(winner);
});
