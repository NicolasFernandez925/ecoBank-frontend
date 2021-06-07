import { types } from "../types/types";

const initialState = {
  operaciones: [],
  balance: {},
};

export const operationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.OPERACIONES:
      const operations = action.payload.map((operation) => {
        const date = new Date(operation.createdAt);
        operation.createdAt = date.toLocaleDateString();
        const operationEdiFecha = Object.assign({}, operation, {
          createdAt: date.toLocaleDateString(),
        });

        return operationEdiFecha;
      });

      return {
        ...state,
        operaciones: operations,
      };
    case types.AGRREGAR_OPERACION:
      let { operation } = action.payload;
      let date = new Date(operation.createdAt);

      const operationEditFecha = Object.assign({}, operation, {
        createdAt: date.toLocaleDateString(),
      });

      return {
        ...state,
        operaciones: [operationEditFecha, ...state.operaciones],
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
