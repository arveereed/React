import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { StoreProvider } from 'easy-peasy'
import store from './store/store.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoreProvider store={store}>
      <Router>
        <App />
      </Router>
    </StoreProvider>
  </StrictMode>,
)
