import { render } from '@testing-library/react'
import Grid from '.'

describe('<Grid />', () => {
  it('renders a Pokémon list', () => {
    const { container } = render(
      <Grid
        pokemons={[
          {
            id: 1,
            formattedName: 'Bulbasaur',
            name: 'bulbasaur',
            sprite: '1.png',
            url: 'https://pokeapi.co/1',
          },
          {
            id: 2,
            formattedName: 'Charmander',
            name: 'charmander',
            sprite: '2.png',
            url: 'https://pokeapi.co/2',
          },
          {
            id: 3,
            formattedName: 'Squirtle',
            name: 'squirtle',
            sprite: '3.png',
            url: 'https://pokeapi.co/3',
          },
        ]}
      />,
    )

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="grid"
      >
        <a
          class="cell"
          href="/1"
        >
          <img
            alt=""
            class="sprite"
            loading="lazy"
            src="1.png"
            style="opacity: 1;"
          />
          <span
            style="opacity: 1;"
          >
            Bulbasaur
          </span>
        </a>
        <a
          class="cell"
          href="/2"
        >
          <img
            alt=""
            class="sprite"
            loading="lazy"
            src="2.png"
            style="opacity: 1;"
          />
          <span
            style="opacity: 1;"
          >
            Charmander
          </span>
        </a>
        <a
          class="cell"
          href="/3"
        >
          <img
            alt=""
            class="sprite"
            loading="lazy"
            src="3.png"
            style="opacity: 1;"
          />
          <span
            style="opacity: 1;"
          >
            Squirtle
          </span>
        </a>
      </div>
    `)
  })

  it('renders a message when Pokémon list is empty', () => {
    const { container } = render(<Grid pokemons={[]} />)

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="grid"
        data-projection-id="1"
      >
        No Pokémon found
      </div>
    `)
  })
})
