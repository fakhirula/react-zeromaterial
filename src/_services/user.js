import { API } from "../_api";

export const getUsers = async () => {
  try {
    const { data } = await API.get("/users")
    return data.data
  } catch (err) {
    console.log(err);
    throw err
  }
};
