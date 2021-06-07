import axios from "axios";

export const axiosHttp = () => {
  let localToken = localStorage.getItem("token");
  let config;
  const url = "http://localhost:4000/";
  if (localToken) {
    config = {
      baseURL: url,
      headers: {
        Authorization: `Bearer ${localToken}`,
        "Content-type": "application/json",
        "Content-Type": "multipart/form-data",
      },
    };
  } else {
    config = {
      baseURL: url,
      headers: {
        "Content-type": "application/json",
        "Content-Type": "multipart/form-data",
      },
    };
  }
  return axios.create(config);
};
