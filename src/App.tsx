import { Auth0Provider } from "@auth0/auth0-react";
import "./App.css";
import { auth0_config } from "./authzero";
import Toml from "./Toml";

function App() {
  return (
    <Auth0Provider
      domain={auth0_config.customDomain}
      clientId={auth0_config.client}
      redirectUri={window.location.origin}
      audience={`https://${auth0_config.domain}/api/v2/`}
      scope="read:current_user update:current_user_metadata offline_access"
    >
      <div className="App">
        <Toml />
      </div>
    </Auth0Provider>
  );
}

export default App;
