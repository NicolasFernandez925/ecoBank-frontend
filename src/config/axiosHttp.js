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
      },
    };
  } else {
    config = {
      baseURL: url,
      headers: {
        "Content-type": "application/json",
      },
    };
  }

  const axiosInstance = axios.create(config);
  return axiosInstance;
};
