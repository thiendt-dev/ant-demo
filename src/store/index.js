import { createStore } from 'redux'
import { 
    rootReducers
} from '../reducers/rootReducers'

export const rootStore = createStore(rootReducers)