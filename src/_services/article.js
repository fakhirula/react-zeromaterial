import { API } from "../_api";

export const getArticles = async () => {
  try {
    const { data } = await API.get("/articles")
    return data.data
  } catch (err) {
    console.log(err);
    throw err
  }
};
