import { Provider } from 'react-redux';

import store from './store';

import {Stock} from './components/Stock'
import './App.css';


function App() {
  return (
    <Provider store={store}>
      <section className='App'>
        <Stock />
      </section>
    </Provider>
  );
}

export default App;
