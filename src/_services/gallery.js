import { API } from "../_api";

export const getGalleries = async () => {
  try {
    const { data } = await API.get("/galleries")
    return data.data
  } catch (err) {
    console.log(err);
    throw err
  }
};
