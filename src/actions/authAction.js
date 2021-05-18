import { axiosHttp } from "../config/axiosHttp";
import { types } from "../types/types";
import Swal from "sweetalert2";
import { startLoading, finishLoading } from "../actions/uiAction";

export const signIn = (data) => {
  const axios = axiosHttp();

  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const resp = await axios.post("api/auth", data);
      dispatch(loginExitoso(resp.data));
      dispatch(finishLoading);
    } catch (error) {
      dispatch(finishLoading());
      console.log(error);
      const { msg } = error.response.data;
      dispatch(loginError(msg));
    }
  };
};

export const confirmationUser = (token) => {
  const axios = axiosHttp();
  return async (dispatch) => {
    try {
      const { data } = await axios.patch(`api/auth/confirmation/${token}`);

      dispatch({
        type: types.AUTH_CONFIRMED,
        payload: data,
      });

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Cuenta activada",
        showConfirmButton: false,
        timer: 3200,
      });
    } catch (error) {
      dispatch({
        type: types.AUTH_CONFIRMED_ERROR,
      });
      Swal.fire({
        position: "center",
        icon: "error",
        title: "El token expiró o ya fue activada",
        showConfirmButton: false,
        timer: 3500,
      });
    }
  };
};

export const registerUser = (data) => {
  const axios = axiosHttp();
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const resp = await axios.post("api/usuario", data);
      dispatch(registerExitoso(resp.data));
      dispatch(finishLoading());
    } catch (error) {
      dispatch(finishLoading());
      const { msg } = error.response.data;
      dispatch(registerError(msg));
    }
  };
};

export const signInGoogle = (response) => {
  const axios = axiosHttp();
  return async (dispatch) => {
    const tokenId = response.tokenId;
    const data = { tokenId };

    try {
      const resp = await axios.post("api/auth/signInGoogle", data);

      dispatch(loginGoogleExitoso(resp.data));
    } catch (error) {
      const { msg } = error.response?.data;
      dispatch(loginGoogleError(msg));
    }
  };
};

export const forgotPassword = (data) => {
  const axios = axiosHttp();
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const resp = await axios.patch("api/auth/forgotPassword", data);
      dispatch(finishLoading());
      dispatch(forgotPassExito(resp.data));
    } catch (error) {
      const { msg } = error.response.data;
      dispatch(finishLoading());
      dispatch(forgotPassError(msg));
    }
  };
};

export const resetPassword = (password, resetToken) => {
  const axios = axiosHttp();
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      const result = await axios.patch("api/auth/resetPasswordUser", {
        password,
        resetToken,
      });
      dispatch(finishLoading());
      dispatch(resetPasswordExito(result.data));
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Contraseña cambiada!",
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (error) {
      const { msg } = error.response.data;
      dispatch(resetPasswordError(msg));
      dispatch(finishLoading());
    }
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch({
      type: types.AUTH_LOGOUT,
    });
  };
};

export const authenticate = () => {
  return async (dispatch) => {
    let localToken = localStorage.getItem("token");
    const data = { localToken };

    const axios = axiosHttp();
    try {
      if (data?.localToken) {
        const { data: resp } = await axios.post("api/auth/check-token", data);

        dispatch({
          type: types.AUTH_EXITO,
          payload: resp,
        });
      } else {
        dispatch({
          type: types.AUTH_ERROR,
        });
      }
    } catch (err) {
      dispatch({
        type: types.AUTH_ERROR,
      });
    }
  };
};

const resetPasswordExito = (data) => ({
  type: types.REGISTRO_EXITOSO,
  payload: data,
});

const resetPasswordError = (errorMsg) => ({
  type: types.RESET_PASSWORD_ERROR,
  payload: errorMsg,
});

const forgotPassExito = (data) => ({
  type: types.FORGOT_PASSWORD_EXITO,
  payload: data,
});
const forgotPassError = (errorMsg) => ({
  type: types.FORGOT_PASSWORD_ERROR,
  payload: errorMsg,
});

const loginGoogleExitoso = (data) => ({
  type: types.LOGIN_GOOGLE_EXITOSO,
  payload: data,
});

const loginGoogleError = (errorMsg) => ({
  type: types.LOGIN_ERROR,
  payload: errorMsg,
});

const registerExitoso = (data) => ({
  type: types.REGISTRO_EXITOSO,
  payload: data,
});

const registerError = (errorMsg) => ({
  type: types.REGISTRO_ERROR,
  payload: errorMsg,
});

const loginExitoso = (data) => ({
  type: types.LOGIN_EXITOSO,
  payload: data,
});

const loginError = (errorMsg) => ({
  type: types.LOGIN_ERROR,
  payload: errorMsg,
});
