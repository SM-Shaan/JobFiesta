import { Auth0Provider } from '@auth0/auth0-react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import "./App.css";
import router from './Router/Router.jsx';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(

  //   <Auth0Provider isSignedIn={false}
  //   domain="dev-vdgep7b8x0ps2c2m.us.auth0.com"
  //   clientId="GuGnMTVuzE9y01zDEMH1fIHB29AqLbm6"
  //   authorizationParams={{
  //     redirect_uri: window.location.origin
  //   }}
  // >
  <Auth0Provider
    domain="dev-r7gyhhk1xc6innc8.us.auth0.com"
    clientId="vxsONLvZVj92WziCNulxXLOuDu03BEin"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    audience="https://dev-r7gyhhk1xc6innc8.us.auth0.com/api/v2/"
    scope="read:users update:users"
  >
    <RouterProvider router={router} /> ,
  </Auth0Provider>,
)
