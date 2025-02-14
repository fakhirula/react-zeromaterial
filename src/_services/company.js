import { API } from "../_api";

export const getCompanies = async () => {
  try {
    const { data } = await API.get("/companies")
    return data.data
  } catch (err) {
    console.log(err);
    throw err
  }
};
