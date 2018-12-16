import { all, takeLatest } from "redux-saga/effects";
import { Types as DeveloperTypes } from "../ducks/developers";

import { addDeveloper } from "./developers";

export default function* rootSaga() {
  yield all([takeLatest(DeveloperTypes.ADD_REQUEST, addDeveloper)]);
}
