import { types } from "../types/types";

const initialState = {
  operaciones: [],
  balance: {},
};

export const operationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.OPERACIONES:
      return {
        ...state,
        operaciones: action.payload,
      };
    case types.AGRREGAR_OPERACION:
      return {
        ...state,
        operaciones: [action.payload.operation, ...state.operaciones],
      };
    case types.BALANCE:
      return {
        ...state,
        balance: action.payload,
      };
    case types.ELIMINAR_OPERACION:
      return {
        ...state,
        operaciones: state.operaciones.filter(
          (op) => op.id !== action.payload.id
        ),
      };
    case types.EDITAR_OPERACION:
      return {
        ...state,
        operaciones: state.operaciones.map((op) =>
          op.id === action.payload.operation.id ? action.payload.operation : op
        ),
      };
    default:
      return state;
  }
};
