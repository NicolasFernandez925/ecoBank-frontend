import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import MyDialog from "../MyDialog";
import FormOperation from "../form/FormOperation";
import { DialogContent, Typography, Container } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../actions/uiAction";

import { deleteOperation, operations } from "../../actions/operationAction";
import FormOperationEdit from "../form/FormOperationEdit";

const ListOperations = () => {
  const [rowData, setRowData] = useState({});

  const [typeModalForm, setTypeModalForm] = useState("");
  const dispatch = useDispatch();
  const { operaciones } = useSelector((state) => state.operation);
  const { loading } = useSelector((state) => state.ui);

  const columns = [
    { title: "Id", field: "id" },
    { title: "Motivo", field: "motivo" },

    {
      title: "Monto",
      field: "monto",
    },

    { title: "Fecha", field: "createdAt" },
  ];

  useEffect(() => {
    dispatch(operations());
  }, [dispatch]);

  const openEditModal = (data) => {
    dispatch(openModal(true));
    setRowData(data);
    setTypeModalForm("Editar");
  };

  const addOperation = () => {
    setRowData({});
    dispatch(openModal(true));
    setTypeModalForm("Agregar");
  };
  const deleteOp = (rowData) => {
    setRowData({});
    dispatch(deleteOperation(rowData.id));
  };
  return (
    <>
      <Container maxWidth="lg">
        <Typography
          style={{ padding: "50px 0px", color: "#484848" }}
          variant="h4"
        >
          Operaciones
        </Typography>
        <MaterialTable
          columns={columns}
          data={operaciones}
          title=""
          options={{
            exportButton: true,
            actionsColumnIndex: -1,
            rowStyle: {
              backgroundColor: "#EEE",
            },
            headerStyle: {
              backgroundColor: "rgb(32 193 175)",
              color: "#FFF",
            },
          }}
          isLoading={loading}
          actions={[
            {
              icon: "edit",
              tooltip: "Editar operaci??n",
              onClick: (event, rowData) => {
                openEditModal(rowData);
              },
              backgroundColor: "rgb(32 193 175)",
            },
            {
              icon: "delete",
              tooltip: "Eliminar operaci??n",
              onClick: (event, rowData) => {
                deleteOp(rowData);
              },
            },
            {
              icon: "add",
              isFreeAction: true,
              tooltip: "Agregar operaci??n",
              onClick: () => {
                addOperation();
              },
            },
          ]}
          localization={{
            header: {
              actions: "Acciones",
            },
          }}
        />

        <MyDialog>
          <DialogContent>
            {typeModalForm === "Editar" ? (
              <FormOperationEdit data={rowData} />
            ) : (
              <FormOperation />
            )}
          </DialogContent>
        </MyDialog>
      </Container>
    </>
  );
};

export default ListOperations;
