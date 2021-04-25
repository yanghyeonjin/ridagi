import { combineReducers } from "redux";

import counter from "modules/counter";
import sample from "modules/sample";

const rootReducer = combineReducers({
  counter,
  sample,
});

export default rootReducer;
