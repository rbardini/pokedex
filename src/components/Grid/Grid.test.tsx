import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import Grid from '.';

describe('<Grid />', () => {
  it('renders a Pokémon list', () => {
    const { container } = render(
      <MemoryRouter>
        <Grid
          pokemons={[
            {
              formattedName: 'Bulbasaur',
              name: 'bulbasaur',
              sprite: '1.png',
              url: 'https://pokeapi.co/1',
            },
            {
              formattedName: 'Charmander',
              name: 'charmander',
              sprite: '2.png',
              url: 'https://pokeapi.co/2',
            },
            {
              formattedName: 'Squirtle',
              name: 'squirtle',
              sprite: '3.png',
              url: 'https://pokeapi.co/3',
            },
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
    <span>
      Bulbasaur
    </span>
  </a>
  <a
    href="/charmander"
  >
    <img
      alt=""
      src="2.png"
    />
    <span>
      Charmander
    </span>
  </a>
  <a
    href="/squirtle"
  >
    <img
      alt=""
      src="3.png"
    />
    <span>
      Squirtle
    </span>
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
