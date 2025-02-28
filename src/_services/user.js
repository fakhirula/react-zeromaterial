import { API } from "../_api"

export const getUsers = async () => {
  try {
    const { data } = await API.get("/users")
    return data.data
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const storeUsers = async (data) => {
  try {
    const response = await API.post("/users", data)
    return response.data
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const showUsers = async (id) => {
  try {
    const { data } = await API.get(`/users/${id}`)
    return data.data
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const updateUsers = async (id, data) => {
  try {
    const response = await API.post(`/users/${id}`, data)
    return response.data
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const destroyUsers = async (id) => {
  try {
    await API.delete(`/users/${id}`)
  } catch (err) {
    console.log(err)
    throw err
  }
}
