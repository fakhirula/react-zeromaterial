import { API } from "../_api"

export const getDonationTypes = async () => {
  try {
    const { data } = await API.get("donation_types", {
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

export const storeDonationTypes = async (data) => {
  try {
    const response = await API.post("/donation_types", data, {
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

export const showDonationTypes = async (id) => {
  try {
    const { data } = await API.get(`/donation_types/${id}`, {
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

export const updateDonationTypes = async (id, data) => {
  try {
    const response = await API.post(`/donation_types/${id}`, data, {
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

export const destroyDonationTypes = async (id) => {
  try {
    await API.delete(`/donation_types/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
  } catch (err) {
    console.log(err)
    throw err
  }
}