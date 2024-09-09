import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {store} from "./app/Store.jsx"
import { Provider } from 'react-redux';
import Counter from './features/counter/Counter';


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <h>Redux</h>
    <Counter />
  </Provider>
)
