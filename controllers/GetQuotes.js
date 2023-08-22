import axios from 'axios';

export const getQuotes = async (req, res, next) => {
    const options = {
        method: "GET",
        url: "https://api.quotable.io/quotes",
        headers: { Accept: "application/json" },
      };
    
      try {
        const { data } = await axios.request(options);
        res.send(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
}

