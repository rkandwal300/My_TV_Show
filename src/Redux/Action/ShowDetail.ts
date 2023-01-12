import { cast, Show } from "../../Types/Modals";
import { ActionCreater } from "./Action_index";

export const SHOW_DETAILS_LOADED = 'SHOW_DETAILS_LOADED';

export const showDetailAction : ActionCreater<Show> = ( showDetail :Show  ) => ({
    type    : SHOW_DETAILS_LOADED  ,
    payload : showDetail ,
})

export const SHOW_DETAIL_ID = 'SHOW_DETAIL_ID';

export const showDetailId : ActionCreater<number> = (id :number)=> ({
    type    : SHOW_DETAIL_ID  ,
    payload : id              ,
})