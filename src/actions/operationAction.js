import { axiosHttp } from "../config/axiosHttp";
import { types } from "../types/types";
import Swal from "sweetalert2";
import { startLoading, finishLoading, openModal } from "../actions/uiAction";

export const operations = () => {
  const axios = axiosHttp();
  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const { data } = await axios.get("/api/operaciones");

      dispatch({
        type: types.OPERACIONES,
        payload: data.operaciones,
      });
      dispatch(finishLoading());
    } catch (error) {
      dispatch(finishLoading());
      console.log(error.response);
    }
  };
};

export const deleteOperation = (id) => {
  const axios = axiosHttp();

  return async (dispatch) => {
    try {
      Swal.fire({
        title: "¿estás seguro?",
        text: "¡Se borrara una operación!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Aceptar",
        cancelButtonText: "Cancelar",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const {
            data: { operation },
          } = await axios.delete(`/api/operaciones/deleteOperation/${id}`);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Operación eliminada!",
            showConfirmButton: false,
            timer: 2000,
          });
          dispatch({
            type: types.ELIMINAR_OPERACION,
            payload: operation,
          });
        }
      });
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Hubo un error al borrar la operación",
        showConfirmButton: false,
        timer: 2000,
      });
      console.log(error);
    }
  };
};
export const balance = () => {
  const axios = axiosHttp();

  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const { data } = await axios.get("api/operaciones/getBalance");

      dispatch({
        type: types.BALANCE,
        payload: data,
      });

      dispatch(finishLoading());
    } catch (error) {
      dispatch(finishLoading());
    }
  };
};

export const createOperation = (values) => {
  const axios = axiosHttp();

  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const { data } = await axios.post(
        "api/operaciones/createOperation",
        values
      );

      dispatch(openModal(false));
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Operación agregada!",
        showConfirmButton: false,
        timer: 2000,
      });
      dispatch({
        type: types.AGRREGAR_OPERACION,
        payload: data,
      });
      dispatch(finishLoading());
    } catch (error) {
      dispatch(finishLoading());

      console.log(error);
    }
  };
};

export const editOperation = (values, id) => {
  const axios = axiosHttp();

  return async (dispatch) => {
    try {
      dispatch(startLoading());
      const { data } = await axios.patch(
        `api/operaciones/editOperation/${id}`,
        values
      );
      dispatch(openModal(false));
      dispatch({
        type: types.EDITAR_OPERACION,
        payload: data,
      });

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Operación editada!",
        showConfirmButton: false,
        timer: 2000,
      });
      dispatch(finishLoading());
    } catch (error) {
      dispatch(finishLoading());
      console.log(error.response);
    }
  };
};
