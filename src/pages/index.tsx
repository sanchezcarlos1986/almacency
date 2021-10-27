import {ReactElement} from 'react';
import {Home as Styles} from './index.styles';

const Home = (): ReactElement => {
  return (
    <Styles.Container>
      <h1>Soy la home</h1>
    </Styles.Container>
  );
};

export default Home;
