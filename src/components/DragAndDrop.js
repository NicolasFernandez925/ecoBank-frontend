import React, { useEffect, useState } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import { useDropzone } from "react-dropzone";

const DragAndDrop = ({ setImg, usuario }) => {
  const [files, setFiles] = useState([]);
  const [fileUpload, setFileUpload] = useState(false);

  const {
    fileRejections,
    getRootProps,
    getInputProps,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: "image/jpeg, image/png",
    onDrop: (acceptedFiles) => {
      setImg(acceptedFiles);
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      setFileUpload(true);
    },
  });

  const thumbs = files.map((file) => (
    <div className="thumbs" key={file.name}>
      <div>
        <img className="thumbInner" src={file.preview} />
      </div>
    </div>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
      {errors.map((e) => (
        <li className="error-thumb" key={e.code}>
          El tipo de archivo debe ser image / jpeg, image / png
        </li>
      ))}
    </li>
  ));

  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const additionalClass = isDragAccept
    ? "accept"
    : isDragReject
    ? "reject"
    : "";
  console.log(usuario);
  return (
    <>
      <Tooltip
        TransitionComponent={Zoom}
        title="Arrastre y suelte la imagen aquí, o haciendo click"
      >
        <div
          {...getRootProps({
            className: `dropzone ${additionalClass}`,
          })}
          className="dropzone-container "
          style={{
            backgroundImage: `URL(${
              fileUpload
                ? ""
                : usuario?.image || localStorage.getItem("imagen-google")
            })`,
          }}
        >
          {thumbs}
          <input {...getInputProps()} />
        </div>
      </Tooltip>
      <p>{fileRejectionItems}</p>
    </>
  );
};

export default DragAndDrop;
