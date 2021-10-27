import {ReactElement} from 'react';
import {Login as Styles} from './index.styles';

type AuthConfig = {
  // eslint-disable-next-line camelcase
  response_type: string;
  // eslint-disable-next-line camelcase
  client_id: string;
  // eslint-disable-next-line camelcase
  redirect_uri: string;
};

const AUTH_URL_BASE = 'https://accounts.spotify.com/authorize';
const AUTH_RESPONSE_TYPE = 'code';
const AUTH_CLIENT_ID = '9d689990aa97409198ba3f41bf380735';
const AUTH_REDIRECT_URI = 'http://localhost:3000';

const AUTH_CONFIG: AuthConfig = {
  response_type: AUTH_RESPONSE_TYPE,
  client_id: AUTH_CLIENT_ID,
  redirect_uri: AUTH_REDIRECT_URI,
  // scope: "%20",
  // state: state,
};

const queryStringifier = (query: AuthConfig): string =>
  Object.entries(query)
    .map(item => item.join('='))
    .join('&');

const AUTH_URL = `${AUTH_URL_BASE}?${queryStringifier(AUTH_CONFIG)}`;

const Login = (): ReactElement => {
  return (
    <Styles.Container>
      <h1>Soy la Login</h1>
      <a href={AUTH_URL}>Login</a>
    </Styles.Container>
  );
};

export default Login;
