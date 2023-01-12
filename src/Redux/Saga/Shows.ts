
import { call, put } from 'redux-saga/effects'
import { SearchProducts, ShowCast, SingleShow } from '../../Api/Api'
import { Action } from '../Action/Action_index'
import { CastLoaded } from '../Action/CastAction';
import { showLoadedAction } from '../Action/Show';
import { showDetailAction } from '../Action/ShowDetail';

export function* fetchShows (action : Action  ) : Generator <any ,any ,any> {
    const shows = yield call( SearchProducts , action.payload ) ;
    yield put(showLoadedAction(shows)) ;

}


export function* fetchShowsDetails (action : Action  ) : Generator <any ,any ,any> {
    const ShowDetail = yield call(  SingleShow , action.payload) ;
    yield put(showDetailAction(ShowDetail)) ;
}



export function* fetchShowsCast (action : Action  ) : Generator <any ,any ,any> {
    const Cast = yield call(  ShowCast , action.payload) ;
    yield put(CastLoaded (Cast)) ;
}