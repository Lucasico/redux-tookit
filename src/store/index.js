
import { configureStore } from "@reduxjs/toolkit"

import stockStore from './modules/stock/Stock.store'

//create new store and add configureStore
const store = configureStore({
    reducer: {
        stock: stockStore,
        //add new store
    }
})

export default store