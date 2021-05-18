import { types } from "../types/types";

const initialState = {
  modalOpen: false,
  loading: false,
  modoDark: false,
  openNav: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UI_START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.UI_FINISH_LOADING:
      return {
        ...state,
        loading: false,
      };
    case types.UI_ABRIR_MODAL:
      return {
        ...state,
        modalOpen: action.payload,
      };
    case types.UI_OPEN_NAV:
      return {
        ...state,
        openNav: action.payload,
      };

    default:
      return state;
  }
};
