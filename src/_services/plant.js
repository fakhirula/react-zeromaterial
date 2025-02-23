import { API } from "../_api";

export const getPlants = async () => {
  try {
    const { data } = await API.get("plants")
    return data.data
  } catch (err) {
    console.log(err);
    throw err
  }
};