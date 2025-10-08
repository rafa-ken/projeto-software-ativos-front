import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react'


createRoot(document.getElementById('root')).render(
  <Auth0Provider
      domain="dev-hw1z84r1ccvnlcxr.us.auth0.com"
      clientId="kfjb67TsHPqqza6eJ87tJQAkgLdAIAsd"
      authorizationParams={{
        audience: "https://dev-hw1z84r1ccvnlcxr.us.auth0.com/api/v2/",
        redirect_uri: window.location.origin
      }}
    >
    <App />
  </Auth0Provider>,
)
