import NotificationProvider from './Components/Contexts/NotificationContext.tsx'
import UserProvider from './Components/Contexts/UserContext.tsx'
import { BrowserRouter } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <NotificationProvider>
            <App/>
        </NotificationProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
)
