import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';
import AllProvider from "../src/assets/context/AllState";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <AllProvider>
    <App />
    </AllProvider>
    </Router>
  </React.StrictMode>
)
