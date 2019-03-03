import React from 'react';
import MemoryRouter from 'react-router-dom/MemoryRouter';
import { render } from 'react-testing-library';

import Grid from '.';

describe('<Grid />', () => {
  it('renders a Pokémon list', () => {
    const { container } = render(
      <MemoryRouter>
        <Grid
          pokemons={[
            { name: 'bulbasaur', sprite: '1.png' },
            { name: 'charmander', sprite: '2.png' },
            { name: 'squirtle', sprite: '3.png' },
          ]}
        />
      </MemoryRouter>,
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
<div>
  <a
    href="/bulbasaur"
  >
    <img
      alt=""
      src="1.png"
    />
    <span />
  </a>
  <a
    href="/charmander"
  >
    <img
      alt=""
      src="2.png"
    />
    <span />
  </a>
  <a
    href="/squirtle"
  >
    <img
      alt=""
      src="3.png"
    />
    <span />
  </a>
</div>
`);
  });

  it('renders a message when Pokémon list is empty', () => {
    const { container } = render(
      <MemoryRouter>
        <Grid pokemons={[]} />
      </MemoryRouter>,
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
<div>
  No Pokémon found
</div>
`);
  });
});
