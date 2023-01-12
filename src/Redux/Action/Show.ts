import { Show } from "../../Types/Modals";
import { ActionCreater } from "./Action_index";



export const SHOW_QUERY_ACTION = 'SHOW_QUERY_ACTION';

export const showQueryAction :ActionCreater <string>  = (query : string) =>({
    type   : SHOW_QUERY_ACTION ,
    payload : query ,
});




export const SHOW_LOADED_ACTION = 'SHOW_LOADED_ACTION';

export const showLoadedAction :ActionCreater <Show[] >  = (show : Show[]  ) =>({

    type    : SHOW_LOADED_ACTION ,
    payload : show    ,
    
});


