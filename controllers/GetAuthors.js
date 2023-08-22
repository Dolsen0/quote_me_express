import axios from "axios";

export const getAuthors = async (req, res, next) => {
  try {
    let authors = new Set();
    let skip = 0;
    let hasMore = true;

    while (hasMore) {
      const response = await axios.get("https://api.quotable.io/quotes", {
        params: {
          limit: 100,
          skip: skip,
        },
      });

      const quotes = response.data.results;
      for (let quote of quotes) {
        authors.add(quote.author);
      }

      hasMore = quotes.length === 100;
      skip += 100;
    }

    res.json(Array.from(authors));
  } catch (error) {
    res.status(500).send("Error fetching authors");
  }
};
