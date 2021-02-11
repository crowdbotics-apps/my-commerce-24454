import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CopyOfSignIn2203842Reducer from '../features/CopyOfSignIn2203842/redux/reducers'
import SignIn2203829Reducer from '../features/SignIn2203829/redux/reducers'
import SignIn2203796Reducer from '../features/SignIn2203796/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CopyOfSignIn2203842: CopyOfSignIn2203842Reducer,
SignIn2203829: SignIn2203829Reducer,
SignIn2203796: SignIn2203796Reducer,

});