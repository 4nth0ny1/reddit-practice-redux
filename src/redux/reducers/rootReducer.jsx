import postReducer from './postReducer'
import commentReducer from './commentReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    posts: postReducer, 
    comments: commentReducer
})

export default rootReducer;