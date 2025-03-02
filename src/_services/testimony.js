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

export const storeTestimonies = async (data) => {
  try {
    const response = await API.post("/testimonies", data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
    return response.data
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const showTestimonies = async (id) => {
  try {
    const { data } = await API.get(`/testimonies/${id}`)
    return data.data
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const updateTestimonies = async (id, data) => {
  try {
    const response = await API.post(`/testimonies/${id}`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
    return response.data
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const destroyTestimonies = async (id) => {
  try {
    await API.delete(`/testimonies/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
  } catch (err) {
    console.log(err)
    throw err
  }
}