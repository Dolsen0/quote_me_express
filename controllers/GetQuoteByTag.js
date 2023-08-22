import axios from 'axios';

export const getQuoteByTag = async (req, res, next) => {
    const tag = req.params.tag;

    const options = {
        method: 'GET',
        url: 'https://api.quotable.io/quotes',
        params: {tags: tag},
        headers: {Accept: 'application/json'}
    };

    try {
        const { data } = await axios.request(options);
        res.send(data);
    } catch (error) {
        console.log(error);
    }
};
