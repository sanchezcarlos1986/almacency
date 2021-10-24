import {Login as Styles} from './index.styles';

type AuthConfig = {
  response_type: string;
  client_id: string;
  redirect_uri: string;
};

const AUTH_URL_BASE: string = 'https://accounts.spotify.com/authorize';

const AUTH_RESPONSE_TYPE: string = 'code';
const AUTH_CLIENT_ID: string = '9d689990aa97409198ba3f41bf380735';
const AUTH_REDIRECT_URI: string = 'http://localhost:3000';

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

const AUTH_URL: string = `${AUTH_URL_BASE}?${queryStringifier(AUTH_CONFIG)}`;

const Login = (): JSX.Element => {
  return (
    <Styles.Container>
      <h1>Soy la Login</h1>
      <a href={AUTH_URL}>Login</a>
    </Styles.Container>
  );
};

export default Login;
