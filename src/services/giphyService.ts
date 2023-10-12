import axios from "axios";
const api_key = "F0BMCJLNgK1zPngcsRJ6WssAO14HuuGr";

async function findGiphy(search: string) {
  const giphyUrl = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${search}`;

  const response = await axios.get(giphyUrl);

  return response;
}

export { findGiphy };
