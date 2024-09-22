import { API_KEY, parseCurrentDate, parsePreviusDate } from "./constants";
import { handleServerResponse } from "./api";

export const handleSearchResponse = ({ keyword }) => {
  return fetch(`https://nomoreparties.co/news/v2/everything?q=${keyword}&from=${parsePreviusDate}&to=${parseCurrentDate}&pageSize=100&sortBy=popularity&apiKey=${API_KEY}
        `).then(handleServerResponse);
};
