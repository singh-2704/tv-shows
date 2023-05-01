import { createSlice, PayloadAction, createEntityAdapter} from "@reduxjs/toolkit";
import {Show} from "../models/show";

const showsAdapter = createEntityAdapter<Show>();

  const initialState = showsAdapter.getInitialState({
    query: "",
    query_shows: {} as {[query: string]: number[]},
    show_loading: {} as {[query: string]: boolean},
    loading: false,
  });

  export type State = typeof initialState;

  const showsSlice = createSlice({
    name: "shows",
    initialState,
    reducers: {
        showsLoaded,
        showsQueryChange,
        showDetailLoaded: showsAdapter.addOne
    },
  });

  function showsLoaded(state: State, action: PayloadAction<Show[]>){
    const shows = action.payload as Show[];
        state.query_shows[state.query] = shows.map(s=>s.id);
        state.loading = false;
        showsAdapter.addMany(state, action);

  };

  function showsQueryChange(state: State, action: PayloadAction<string>){
    state.query = action.payload;
    state.loading = true;

  };

  const {actions, reducer: showsReducer} = showsSlice;
  
  export const {showsLoaded: showsLoadedAction, showsQueryChange: showsQueryChangeAction} = actions;


  export default showsReducer;