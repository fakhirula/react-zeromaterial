import { API } from "../_api";

export const getPaymentMethods = async () => {
  try {
    const { data } = await API.get("payment_methods")
    return data.data
  } catch (err) {
    console.log(err);
    throw err
  }
};