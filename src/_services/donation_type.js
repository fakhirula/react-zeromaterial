import { API } from "../_api";

export const getDonationTypes = async () => {
  try {
    const { data } = await API.get("donation_types")
    return data.data
  } catch (err) {
    console.log(err);
    throw err
  }
};