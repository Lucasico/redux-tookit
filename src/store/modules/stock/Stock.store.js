import { createSlice } from "@reduxjs/toolkit";

const stock = createSlice({
  name: "stock",
  initialState: {
    counter: 0,
  },
  reducers: {
    increment(state) {
      state.counter += 1;
    },

    decrement(state) {
      state.counter -= 1;
    },

    asyncIncrementReducer(state, {payload}) {
        state.counter += payload
    }
  },
});

//ele cria automaticamente as ações
export const { decrement, increment, asyncIncrementReducer } = stock.actions;
export default stock.reducer;

//asyncs

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}

export function asyncIncrement() {
  return async function (dispatch) {
    await sleep(3000)
    dispatch(increment())
  };
}

export function asyncIncrementWithPayload(payload){
    return async function(dispatch){
        await sleep(2000)
        dispatch(asyncIncrementReducer(payload))
    }
}

//extraReducers -> builder

