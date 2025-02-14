import { API } from "../_api";

export const getTestimonies = async () => {
  try {
    const { data } = await API.get("testimonies")
    return data.data
  } catch (err) {
    console.log(err);
    throw err
  }
};
