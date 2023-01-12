import { createSelector } from  'reselect'
import { State } from "../Reducer/Store";

export const showDetail = ( state : State) => state.showDetail;

export const showDetailSelector = createSelector (showDetail , (Detail) => Detail.showDetail  )

export const showDetailIdSelector = createSelector (showDetail , (Detail) => Detail.Id  )

export const  mapShowDetailSelector  = createSelector (showDetailSelector ,(Detail ) =>  Detail[+ Object.keys(Detail)]  )
