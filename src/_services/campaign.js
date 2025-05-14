import { API } from "../_api";

export const getCampaigns = async () => {
  try {
    const { data } = await API.get("/campaigns");
    return data.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const storeCampaigns = async (data) => {
  try {
    const response = await API.post("/campaigns", data, {
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

export const showCampaigns = async (id) => {
  try {
    const { data } = await API.get(`/campaigns/${id}`);
    return data.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const updateCampaigns = async (id, data) => {
  try {
    const response = await API.post(`/campaigns/${id}`, data, {
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

export const destroyCampaigns = async (id) => {
  try {
    await API.delete(`/campaigns/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};