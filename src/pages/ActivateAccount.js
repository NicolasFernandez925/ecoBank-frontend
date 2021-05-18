import React, { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router";
import { useDispatch } from "react-redux";

import { confirmationUser } from "../actions/authAction";

const ActivateAccount = () => {
  const [confirmation, setConfirmation] = useState(false);
  const dispatch = useDispatch(confirmationUser);
  let { token } = useParams();

  useEffect(() => {
    dispatch(confirmationUser(token));
    setConfirmation(true);
  }, [dispatch, token]);

  return confirmation && <Redirect to={"/auth/signin"} />;
};
export default ActivateAccount;
