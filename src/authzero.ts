export const auth0_config = {
  domain: process.env.REACT_APP_AUTH0_DOMAIN as string,
  customDomain: process.env.REACT_APP_AUTH0_CUSTOM_DOMAIN as string,
  client: process.env.REACT_APP_AUTH0_CLIENT_ID as string,
  backendClient: process.env.REACT_APP_AUTH0_BACKEND_CLIENT_ID as string,
}
