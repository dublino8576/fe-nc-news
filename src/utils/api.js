import axios from "axios";

const NcNewsAPI = axios.create({
  baseURL: "https://nc-news-with-comments-project.onrender.com/api/",
});

export const fetchUserInfo = () => {
  return NcNewsAPI.get("/users").then(({ data }) => {
    return data;
  });
};

export const fetchArticles = () => {
  return NcNewsAPI.get("/articles").then(({ data }) => {
    return data;
  });
};

export const fetchArticleById = (article_id) => {
  return NcNewsAPI.get(`/articles/${article_id}`).then(({ data }) => {
    return data;
  });
};

export const fetchCommentsByArticleId = (article_id) => {
  return NcNewsAPI.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data;
  });
};
