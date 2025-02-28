const express = require("express");
const transport = require("./mail.js");
const app = express();
app.use(express.json());

// app.post("/sendmail", (req, res) => {
//   let receiver = req.body.mail;
//   let content = req.body.data;

//   let mailoptions = {
//     from: "sagaryarra767@gmail.com",
//     to: receiver,
//     subject: "using post method",
//     text: content,
//   };
//   transport.sendMail(mailoptions, (err, info) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("sending mail success", info);
//     }
//   });
// });



app.post("/sendotp", (req, res) => {
  let otp = "";
  for (i = 0; i < 4; i++) {
    let n = Math.floor(Math.random() * 10);
    otp += n;
  }
  let receiver = req.body.mail;
    let content = req.body.data;
  let mailoptions = {
    from: "sagaryarra767@gmail.com",
    to: receiver,
    subject: "otp task",
    text: `${content} ${otp}`,
  };
  transport.sendMail(mailoptions, (err, info) => {
    if (err) {
      res.send(err);
    } else {
      res.send("otp sending successfully");
    }
  });
});

app.listen(3000, () => {
  console.log("server has been running");
});
