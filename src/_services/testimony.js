import { API } from "../_api"

export const getTestimonies = async () => {
  try {
    const { data } = await API.get("testimonies")
    return data.data
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const storedTestimonies = async (data) => {
  try {
    const response = await API.post("/testimonies", data)
    return response.data
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const showdTestimonies = async (id) => {
  try {
    const { data } = await API.get(`/testimonies/${id}`)
    return data.data
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const updatedTestimonies = async (id, data) => {
  try {
    const response = await API.post(`/testimonies/${id}`, data)
    return response.data
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const destroyTestimonies = async (id) => {
  try {
    await API.delete(`/testimonies/${id}`);
  } catch (err) {
    console.log(err);
    throw err;
  }
};