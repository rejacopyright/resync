import { StrictMode } from 'react'
import { HashRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App'
import './app.scss'
import '@font-icon/line-awesome/css/line-awesome.css'
import reportWebVitals from './reportWebVitals'

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
)

reportWebVitals()
