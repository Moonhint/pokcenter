import { render } from '@testing-library/react';
import HomeScreen from './HomeScreen';
import locale from './locale';

test('renders header image', () => {
  const { container } = render(<HomeScreen />)
  const imgHeader = container.querySelector('[data-test="img-header"]')
  expect(imgHeader).toBeInTheDocument();
});

test('renders link to my pokomen', () => {
  const { container } = render(<HomeScreen />)
  const linkToMyPokemon = container.querySelector('[data-test="link-my-pokemon"]')
  expect(linkToMyPokemon).toHaveTextContent(locale.BTN_MY_POKEMON);
});

test('renders link to pokemon list', () => {
  const { container } = render(<HomeScreen />)
  const linkToMyPokemon = container.querySelector('[data-test="link-pokemon-list"]')
  expect(linkToMyPokemon).toHaveTextContent(locale.BTN_POKEMON_LIST);
});