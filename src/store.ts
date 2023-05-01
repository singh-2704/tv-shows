import createSagaMiddleware from "redux-saga";
import { configureStore } from '@reduxjs/toolkit';
import { takeEvery, takeLatest} from "redux-saga/effects";
import { LOAD_SHOW_ACTION} from "./actions/Shows";
import { fetchShowDetail, fetchShows } from "./sagas/Shows";
import showsReducer from "./slices/Shows";
import {showsQueryChangeAction} from "./slices/Shows";


function * rootSaga(){
    yield takeLatest(showsQueryChangeAction, fetchShows);
    yield takeEvery(LOAD_SHOW_ACTION, fetchShowDetail);
}
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        shows: showsReducer,
    },
    middleware: [sagaMiddleware]
})
sagaMiddleware.run(rootSaga);


export type State = ReturnType<typeof store.getState>

export default store;