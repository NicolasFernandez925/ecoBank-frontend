import { axiosHttp } from "../config/axiosHttp";

export const useAuthentication = () => {
  let localToken = localStorage.getItem("token");
  const axios = axiosHttp();
  return new Promise((resolve, reject) => {
    if (localToken) {
      axios
        .post("api/auth/check-token", localToken)
        .then(({ data }) => {
          if (data.error == null) {
            sessionStorage.setItem("auth", data.token);
            resolve(true);
          } else {
            localStorage.removeItem("auth");
            resolve(false);
          }
        })
        .catch((err) => reject(false));
    } else {
      resolve(false);
    }
  });
};
