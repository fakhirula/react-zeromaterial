import { API } from "../_api"

export const login = async ({ email, password }) => {
  try {
    const { data } = await API.post("/login", { email, password })
    return data
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const register = async ({ name, email, password }) => {
  try {
    const { data } = await API.post("/register", { name, email, password })
    return data
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const logout = async ({ token }) => {
  try {
    const { data } = await API.post("/logout", { token }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
    localStorage.removeItem("accessToken")
    return data
  } catch (err) {
    console.log(err)
  }
}