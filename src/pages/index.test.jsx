import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './index';

describe('Home', () => {
  render(<Home />);

  test('render title', () => {
    expect(screen.getByText(/soy la home/i)).toBeInTheDocument();
  });
});
