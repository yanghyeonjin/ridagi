import { combineReducers } from "redux";

import counter from "modules/counter";
import sample from "modules/sample";
import loading from "modules/loading";

const rootReducer = combineReducers({
  counter,
  sample,
  loading,
});

export default rootReducer;
