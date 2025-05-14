import { API } from "../_api";

export const getDonations = async () => {
  try {
    const { data } = await API.get("donations");
    return data.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const storeDonations = async (data) => {
  try {
    const response = await API.post("/donations", data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const showDonations = async (id) => {
  try {
    const { data } = await API.get(`/donations/${id}`);
    return data.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const updateDonations = async (id, data) => {
  try {
    const response = await API.post(`/donations/${id}`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const destroyDonations = async (id) => {
  try {
    await API.delete(`/donations/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};