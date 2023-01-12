import produce from 'immer';
import { schema , normalize } from 'normalizr';
import { AnyAction } from 'redux';
import { cast, Show } from "../../Types/Modals"
// import { State } from "./Store"
// import { ActionCreater } from '../Action/Action_index';
import { SHOW_DETAILS_LOADED, SHOW_DETAIL_ID } from '../Action/ShowDetail';


type NormalizedCast ={
    showDetail : { [ castId : number ] : Show } ,
    Id         : number ;
}

const initialState : NormalizedCast = { showDetail :{} , Id : 0} 

export const ShowDetailReducer  = ( state =initialState , action :AnyAction ) : NormalizedCast =>{

    switch(action.type) {

        case SHOW_DETAILS_LOADED :
            return produce(state , (draft)=>{
                const tempDetail = action.payload as Show;

                const DetailSchema = new schema.Entity ('tempDetail');

                const NormalizeData  = normalize(tempDetail , DetailSchema)

                draft.showDetail = NormalizeData.entities.tempDetail || {} ;
            })

        case SHOW_DETAIL_ID :
            return produce(state , (draft)=>{
                const tempId = action.payload ;
                
                draft.Id =tempId ;
            })

        default :
        return state
    }

} 