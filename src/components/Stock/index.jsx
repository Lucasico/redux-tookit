import { useDispatch } from "react-redux";

import {
  increment,
  decrement,
  asyncIncrement,
  asyncIncrementWithPayload,
} from "../../store/modules/stock/Stock.store";

import './Stock.css';

export const Stock = () => {

  const dispatch = useDispatch();
  const stock = ((state) => state.stock);
  
  /**
   * Otima playlist: https://www.youtube.com/watch?v=r5c9zvrzmFs&list=PLbISvIqMwJh2FwM2G1lyTDJDg7Fyrv3Aj
   * Otimo artigo sobre o createAsyncThunk: https://blog.logrocket.com/using-redux-toolkits-createasyncthunk/
   * Otimo para organização das pastas: https://dev.to/chinwike/separating-logic-in-your-redux-toolkit-application-h7i
   */
  return (
    <>
  
      <div className="counter">
        <span> {stock.counter} </span>
      </div>
      <div className="contentButtons">
        <button className="button" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button className="button" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button className="button" onClick={() => dispatch(asyncIncrement())}>
          Incremento assincrono
        </button>
        <button
          className="button"
          onClick={() => dispatch(asyncIncrementWithPayload(5))}
        >
          Incremento com payload
        </button>
      </div>

    </>
  );
};
