import { API } from "../_api"

export const getPlants = async () => {
  try {
    const { data } = await API.get("plants")
    return data.data
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const storePlants = async (data) => {
  try {
    const response = await API.post("/plants", data, {
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

export const showPlants = async (id) => {
  try {
    const { data } = await API.get(`/plants/${id}`)
    return data.data
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const updatePlants = async (id, data) => {
  try {
    const response = await API.post(`/plants/${id}`, data, {
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

export const destroyPlants = async (id) => {
  try {
    await API.delete(`/plants/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
  } catch (err) {
    console.log(err)
    throw err
  }
}