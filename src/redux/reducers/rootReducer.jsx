import postReducer from './postReducer'
import commentReducer from './commentReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    postReducer: postReducer, 
    commentReducer: commentReducer
})

export default rootReducer;