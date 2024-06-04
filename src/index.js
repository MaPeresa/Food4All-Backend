import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello world u browseru");
  console.log("hello u konzolama");
});

app.listen(port, () => console.log(`Slušam na portu ${port}`));
