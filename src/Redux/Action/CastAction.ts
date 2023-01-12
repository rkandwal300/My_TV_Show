import { cast } from "../../Types/Modals";
import { ActionCreater } from "./Action_index";

export const CAST_ID = 'CAST_ID';
export const CastId : ActionCreater<number> = ( id : number ) => ({
    type    : CAST_ID ,
    payload : id      ,
})



export const CAST_LOADED = 'CAST_LOADED';
export const CastLoaded : ActionCreater<cast> = ( cast : cast)=> ({
    type    : CAST_LOADED ,
    payload : cast    ,
})