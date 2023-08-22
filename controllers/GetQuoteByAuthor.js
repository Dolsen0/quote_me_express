import axios from "axios";

export const getQuoteByAuthor = async (req, res, next) => {
  const author = req.params.author;

  const options = {
    method: "GET",
    url: "https://api.quotable.io/quotes",
    params: { author: author },
    headers: { Accept: "application/json" },
  };

  try {
    const { data } = await axios.request(options);
    res.send(data)
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
