import { API } from "../_api";

export const getCampaigns = async () => {
  try {
    const { data } = await API.get("/campaigns")
    return data.data
  } catch (err) {
    console.log(err);
    throw err
  }
};
