import express from "express";
import { getQuoteByTag } from "./controllers/GetQuoteByTag.js";
import { getQuotes } from "./controllers/GetQuotes.js";
import { getQuoteByAuthor } from "./controllers/GetQuoteByAuthor.js";
import { getAuthors } from "./controllers/GetAuthors.js";

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  console.log(`${req.method} request for ${req.url} endpoint`);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello Welcome to quotes!");
});

app.get("/quote", getQuotes)

app.get("/quote/author", getAuthors)

app.get("/quote/author/:author", getQuoteByAuthor);

app.get("/quote/tag/:tag", getQuoteByTag);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
