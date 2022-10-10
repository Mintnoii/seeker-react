import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import routes from './routes/index'
import { RecoilRoot } from 'recoil'
import 'virtual:windi.css'
import './index.css'

const App = () => {
  return useRoutes(routes)
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </Router>
  </React.StrictMode>
)
