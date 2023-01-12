import { createSelector } from  'reselect'
import { State } from "../Reducer/Store";

export  const  castSelector = ( state : State) => state.cast;

export const  castLoadedSelector = createSelector(castSelector , (cast)=> cast.cast)

export const castMapLoaded = createSelector( castLoadedSelector , (castLoaded)=> Object.keys(castLoaded ).map((Id ) => castLoaded[+Id]  )  )