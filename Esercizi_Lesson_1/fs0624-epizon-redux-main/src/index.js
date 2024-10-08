import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'
import './style/index.css'

import store from './redux/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    //privder ha bisogno di una prop chiamata store e gli diamo come valore l'oggetto storre che abbiamo esportato prima
    <Provider store={store}>
        <App />
    </Provider>)
