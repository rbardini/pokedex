import React from 'react';
import { fireEvent, render } from 'react-testing-library';

import SearchField from '.';

describe('<SearchField />', () => {
  it('renders a text input', () => {
    const { container } = render(
      <SearchField onChange={jest.fn()} value="pikachu" />,
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
<input
  placeholder="Search for Pokémon"
  type="text"
  value="pikachu"
/>
`);
  });

  it('calls onChange with search query', () => {
    const onChange = jest.fn();

    const { container } = render(
      <SearchField onChange={onChange} value="pikachu" />,
    );

    fireEvent.change(container.firstChild as Element, {
      target: { value: 'charmander' },
    });

    expect(onChange).toHaveBeenCalledWith('charmander');
  });
});
