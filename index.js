import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const today = new Date();
  let day = today.getDay();

  let type = "weekend";
  let dayMessage = "have fun!";

  if (day == "0" || day == "6") {
    type;
    dayMessage;
  } else {
    type = "weekday";
    dayMessage = "work hard";
  }

  res.render("index.ejs", {
    typeOfDay: type,
    message: dayMessage,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
