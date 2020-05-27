import { createStore } from 'redux'
import cartItemsReducer from '../reducer/Reducer'

const store = createStore(cartItemsReducer)

export default store