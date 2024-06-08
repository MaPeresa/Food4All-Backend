import express from "express";
import { storage } from "./memory_storage";
import cors from "cors";

console.log(storage);
const app = express();
const port = 3000;

app.use(cors());

app.get("/recipes", (req, res) => {
  let recepti = storage.recipes;
  res.send(recepti);
});

app.listen(port, () => console.log(`Slušam na portu ${port}`));
