import { API } from "../_api"

export const getUsers = async () => {
  try {
    const { data } = await API.get("/users", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
    return data.data
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const storeUsers = async (data) => {
  try {
    const response = await API.post("/users", data, {
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

export const showUsers = async (id) => {
  try {
    const { data } = await API.get(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
    return data.data
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const updateUsers = async (id, data) => {
  try {
    const response = await API.post(`/users/${id}`, data, {
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

export const destroyUsers = async (id) => {
  try {
    await API.delete(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const showUserCampaigns = async (id) => {
  try {
    const { data } = await API.get(`/usershowcampaigns/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
    return data.data
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const showUserDonations = async (id) => {
  try {
    const { data } = await API.get(`/usershowdonations/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
    return data.data
  } catch (err) {
    console.log(err)
    throw err
  }
}