import { BASE_URL } from "./constants";

export const handleServerResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export const getSavedArticles = () => {
  const token = localStorage.getItem("jwt");
  return fetch(`${BASE_URL}/articles`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(handleServerResponse);
};

export const addSavedArticle = (newsData, keyword) => {
  const token = localStorage.getItem("jwt");
  return fetch(`${BASE_URL}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title: newsData.title,
      text: newsData.description,
      date: newsData.publishedAt,
      source: newsData.source.name,
      link: newsData.url,
      image: newsData.urlToImage,
      keyword: keyword,
    }),
  }).then(handleServerResponse);
};

export const removeSavedArticle = (selectedArticle) => {
  const token = localStorage.getItem("jwt");
  return fetch(`${BASE_URL}/articles/${selectedArticle._id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(handleServerResponse);
};
