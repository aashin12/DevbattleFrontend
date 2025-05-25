import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter> 
  <GoogleOAuthProvider clientId='1035033559730-bi8e251ud0693co7pm9enj75iet3lmro.apps.googleusercontent.com'> 
    <App />
  </GoogleOAuthProvider>
  </BrowserRouter>
  </StrictMode>,
)
