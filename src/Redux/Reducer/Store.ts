import createSagaMiddleware from "@redux-saga/core";
import { combineReducers  , createStore , applyMiddleware } from "redux";
import ShowReducer from "./Show";
import { composeWithDevTools } from 'redux-devtools-extension';
import { debounce, take, takeEvery, takeLatest, takeLeading } from "redux-saga/effects";
import { SHOW_QUERY_ACTION } from "../Action/Show";
import { fetchShows, fetchShowsCast, fetchShowsDetails } from "../Saga/Shows";
import { ShowDetailReducer } from "./ShowDetail";
import {  SHOW_DETAIL_ID } from "../Action/ShowDetail";
import castReducer from "./castReducer";


const reducer = combineReducers({
    shows      : ShowReducer       ,
    cast       : castReducer       , 
    showDetail : ShowDetailReducer ,
}) ;

function*  rootSaga (){
    yield debounce( 100 ,  SHOW_QUERY_ACTION  , fetchShows ) ;
    yield takeLeading( SHOW_DETAIL_ID    , fetchShowsDetails ) ;
    yield takeLeading( SHOW_DETAIL_ID    , fetchShowsCast ) ;
}

const sagaMiddleware = createSagaMiddleware();


const store = createStore(reducer , composeWithDevTools ( applyMiddleware(sagaMiddleware) )  );

sagaMiddleware.run(rootSaga);

export default store ; 
export type State = ReturnType< typeof reducer >


// window .__REDUX_DEVTOOLS_EXTENSION__ && window .__REDUX_DEVTOOLS_EXTENSION__()  we use composite dev tools 