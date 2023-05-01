import {call, put} from "redux-saga/effects";
import { loadShowDetail, searchShows } from "../api";
import { Action } from "../actions";
import { showDetailLoaded} from "../actions/Shows";
import { showsLoadedAction } from "../slices/Shows";

export function * fetchShows(action: Action):Generator<any,any,any> {
   const shows = yield call(searchShows, action.payload);
   yield put(showsLoadedAction(shows));
}

export function * fetchShowDetail(action: Action):Generator<any,any,any> {
    const show = yield call(loadShowDetail, action.payload);
    yield put(showDetailLoaded(show));
 }
 
