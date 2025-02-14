import { API } from "../_api";

export const getComments = async () => {
  try {
    const { data } = await API.get("/comments")
    return data.data
  } catch (err) {
    console.log(err);
    throw err
  }
};
