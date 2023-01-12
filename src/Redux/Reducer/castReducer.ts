import produce from 'immer';
import { schema , normalize } from 'normalizr';
import { AnyAction } from 'redux';
import { cast } from "../../Types/Modals"
import { CAST_LOADED } from '../Action/CastAction';


type castState = {
    cast:  {[castId :  number] : cast},
}

const initialState : castState = {
    cast  : {}
} 

const castReducer  =( state =initialState , action :AnyAction ) :castState =>{

    switch(action.type){

        case CAST_LOADED :
            return produce(state , (draft)=>{
                const tempDetail = action.payload ;
                const DetailSchema = new schema.Entity ('tempDetail');
                
                const NormalizeData  = normalize(tempDetail , [DetailSchema])

                draft.cast = NormalizeData.entities.tempDetail || [] ;
            })

        default :
        return state
    }
}
export default castReducer;