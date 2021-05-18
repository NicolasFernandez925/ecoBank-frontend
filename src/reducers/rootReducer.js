import { combineReducers } from "redux";

import { uiReducer } from "./uiReducer";
import { operationReducer } from "./operationReducer";
import { authReducer } from "./authReducer";

export const rootReducer = combineReducers({
  ui: uiReducer,
  operation: operationReducer,
  auth: authReducer,
});
