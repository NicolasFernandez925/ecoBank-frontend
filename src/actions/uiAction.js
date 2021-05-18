import { types } from "../types/types";

export const startLoading = () => ({
  type: types.UI_START_LOADING,
});
export const finishLoading = () => ({
  type: types.UI_FINISH_LOADING,
});

export const openModal = (data) => ({
  type: types.UI_ABRIR_MODAL,
  payload: data,
});

export const openMenu = (data) => ({
  type: types.UI_OPEN_NAV,
  payload: data,
});

export const modoDark = (data) => ({
  type: types.UI_MODO_DARK,
  payload: data,
});
