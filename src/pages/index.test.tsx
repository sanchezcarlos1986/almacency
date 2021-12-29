import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './index';

describe('Home', () => {
  render(<Home products={[]} />);

  test('render title', () => {
    expect(screen.getByText(/soy indexroute/i)).toBeInTheDocument();
  });
});
