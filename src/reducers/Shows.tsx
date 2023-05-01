import { SHOW_DETAIL_LOADED} from "../actions/Shows";
import { Show } from "../models/show";
import { AnyAction } from "redux";

import { produce } from "immer";

type State = {
  shows: { [showId: number]: Show };
  query: string;
  query_shows: {[query: string]: number[]};
  show_loading: {[showId: number]: boolean}
  loading: boolean;
};

const initialState: State = {
  shows: {},
  query: "",
  query_shows: {},
  show_loading: {},
  loading: false,
};

function showReducer(state = initialState, action: AnyAction): State {
  switch (action.type) {
  
    case SHOW_DETAIL_LOADED:
      return produce(state, (draft) => {
        const show = action.payload;
        console.log("reducer", show);
        draft.shows[show.id] = show;
       
      });

    default:
      return state;
  }
}

export default showReducer;
