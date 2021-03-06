import { types } from "../types/types";

const initialState = {
  token: null,
  autenticado: null,
  usuario: null,
  error: null,
  confirmed: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_EXITOSO:
      localStorage.setItem("token", action.payload.token);

      return {
        ...state,
        token: action.payload.token,
        autenticado: true,
        usuario: action.payload.usuario,
        confirmed: true,
        error: null,
      };
    case types.LOGIN_GOOGLE_EXITOSO:
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("imagen-google", action.payload.usuario.imagen);
      return {
        ...state,
        token: action.payload.token,
        autenticado: true,
        confirmed: true,
        usuario: action.payload.usuario,
        error: null,
      };
    case types.REGISTRO_EXITOSO:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        autenticado: false,
        confirmed: false,
        usuario: action.payload.usuario,
        error: null,
      };

    case types.USER_EDIT: {
      console.log(action.payload);
      return {
        ...state,
        usuario: action.payload,
        error: null,
      };
    }
    case types.USER_EDIT_ERROR: {
      console.log(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    }

    case types.REGISTRO_ERROR:
    case types.LOGIN_ERROR:
      return {
        ...state,
        autenticado: false,
        error: action.payload,
      };

    case types.RESET_PASSWORD_EXITO:
    case types.FORGOT_PASSWORD_EXITO:
      return {
        ...state,
        error: null,
      };
    case types.RESET_PASSWORD_ERROR:
    case types.FORGOT_PASSWORD_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case types.AUTH_EXITO:
      return {
        ...state,
        autenticado: true,
        usuario: action.payload.usuario,
        error: null,
      };
    case types.AUTH_ERROR:
      return {
        ...state,
        autenticado: false,
      };
    case types.AUTH_CONFIRMED:
      return {
        ...state,
        confirmed: true,
        autenticado: false,
        usuario: action.payload.user,
        error: null,
      };
    case types.AUTH_CONFIRMED_ERROR:
    case types.AUTH_LOGOUT:
      localStorage.removeItem("token");
      localStorage.removeItem("imagen-google");
      return {
        ...state,
        token: null,
        confirmed: false,
        autenticado: false,
        usuario: null,
        error: null,
      };
    default:
      return state;
  }
};
