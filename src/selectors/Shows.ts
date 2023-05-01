import { createSelector } from 'reselect';
import {State} from '../store';


const showsStateSelector = (state: State) => state.shows;

export const showsQuerySelector = createSelector(showsStateSelector,
    (showState) => showState.query
    );

export const showsMapSelector = createSelector(showsStateSelector,(showsState)=>
    showsState.entities
);

export const queryShowMapSelector = createSelector(showsStateSelector,(showsState)=>
    showsState.query_shows
);

export const showLoadingSelector = createSelector(showsStateSelector, (showsState)=>
showsState.loading);

export const showsSelector = createSelector(showsMapSelector,showsQuerySelector, queryShowMapSelector,(showsMap, query, queryShowMap )=>
queryShowMap[query] && queryShowMap[query].map((showId)=>showsMap[+showId])
);

