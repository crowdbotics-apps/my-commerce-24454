import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn2203829Reducer from '../features/SignIn2203829/redux/reducers'
import SignIn2203796Reducer from '../features/SignIn2203796/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn2203829: SignIn2203829Reducer,
SignIn2203796: SignIn2203796Reducer,

});