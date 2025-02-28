import { API } from "../_api"

export const getPaymentMethods = async () => {
  try {
    const { data } = await API.get("payment_methods")
    return data.data
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const storePaymentMethods = async (data) => {
  try {
    const response = await API.post("/payment_methods", data)
    return response.data
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const showPaymentMethods = async (id) => {
  try {
    const { data } = await API.get(`/payment_methods/${id}`)
    return data.data
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const updatePaymentMethods = async (id, data) => {
  try {
    const response = await API.post(`/payment_methods/${id}`, data)
    return response.data
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const destroyPaymentMethods = async (id) => {
  try {
    await API.delete(`/payment_methods/${id}`)
  } catch (err) {
    console.log(err)
    throw err
  }
}