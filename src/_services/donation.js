import { API } from "../_api";

export const getDonations = async () => {
  try {
    const { data } = await API.get("donations")
    return data.data
  } catch (err) {
    console.log(err);
    throw err
  }
};