import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './redux/Store.js'

import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
 <Provider store={store}>
  <BrowserRouter>
 
  <StrictMode>
    <App />
  </StrictMode>
 </BrowserRouter>

 </Provider>
)
