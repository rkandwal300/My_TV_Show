import produce from 'immer';
import { schema , normalize } from 'normalizr';
import { AnyAction } from 'redux';
import { Show  } from '../../Types/Modals';
import { Action, ActionCreater } from '../Action/Action_index';
import { showLoadedAction, SHOW_LOADED_ACTION, SHOW_QUERY_ACTION } from '../Action/Show';
import { State } from './Store';


type showState = {
    show         : {  [showId : number ] : Show      } ,
    query_show   : {  [query  : string ] : number [] } ,
    show_loading : {  [showId : number ] : boolean   } ,
    query        : string  , 
    loading      : boolean ,                
}

export const initialState : showState = {
    show        : {} ,
    query_show  : {} ,
    query       : '' ,
    show_loading: {} ,
    loading     : false ,

};

const ShowReducer = (state = initialState , action : Action ): showState => {

    switch( action.type ){
        case SHOW_LOADED_ACTION:
            return  produce(state , (draft)=>{
                const show =  action.payload as Show[] ;

                if( !show  || show.length === 0 ){
                    return ;
                }
                
                const ShowsSchema = new schema.Entity ('show');

                
                const NormalizedData = normalize( show , [ShowsSchema]) ;

                draft.query_show[draft.query] = NormalizedData.result ;


                draft.show ={ ...draft.show , ...NormalizedData.entities.show }  ;
            })

        case SHOW_QUERY_ACTION:
            return  produce(state , (draft)=>{
                const query = action.payload as string ;
                draft.query = query ;
            })

    default :
    return state;

    }

}

export default ShowReducer;