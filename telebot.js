const axios = require("axios");

const text = "this is a message";
const url = `https://api.telegram.org/bot932960451:AAFPlnDYuuZLe3S4PclHy4vrnwDI7GoPLc4/sendMessage?chat_id=921588001&text=${text}`;

axios.get(url).then(res => {
  console.log(res.data.result.text);
});
