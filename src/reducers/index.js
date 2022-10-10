import Reducer from './restaurantLogin'
import { CustomerReducer } from './restaurantLogin'

import { combineReducers } from 'redux'


export const rootReducer = combineReducers({
    Reducer,
    CustomerReducer
})

