import { createSelector } from "reselect";
import { Show } from "../../Types/Modals";
import { State } from "../Reducer/Store";

export const showsStateSelector = (state :State) => state.shows;


export const showLoadingSelector = createSelector (showsStateSelector , (showSelect)=>showSelect.loading);

export const querySelector = createSelector (showsStateSelector , (showSelect)=>showSelect.query);

export const showStateSelector = createSelector (showsStateSelector , (showSelect)=>showSelect.show);

export const mapQueryShowSelector = createSelector (showsStateSelector , (showSelect)=>showSelect.query_show);


export const mapShowStateSelector = createSelector (showStateSelector  , querySelector , mapQueryShowSelector , (showState  , query , mapQueryShow )=> mapQueryShow[ query ]?.map((showId)=>showState[showId])  );