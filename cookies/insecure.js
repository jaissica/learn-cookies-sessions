const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const bodyParser = require('body-parser');

app.use(cookieParser());

const username = 'stacy';


app.get("/start", (req, res) => {
  const uid = req.query.id;
  if(uid === username) {
    console.log(uid);
    res.cookie('user', 'stacy', { httpOnly: true});
  }
  res.send("Start Page");
});

app.get("/home", (req, res) => {
  console.log(req.cookies);
  let uname = req.cookies['user'];
  if(uname === username) {
    res.send("You have logged in! Welcome : " + username);
  }
  else{
    res.send("You are not authorized to view this page");
  }

})

app.listen(8000);
