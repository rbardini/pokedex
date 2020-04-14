import React from 'react';
import { render } from 'react-dom';
import { MemoryRouter } from 'react-router-dom';

import App from '.';

describe('<App />', () => {
  test('renders without exploding', () => {
    const div = document.createElement('div');
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
      div,
    );
  });
});
