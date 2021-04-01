import { render } from '@testing-library/react';
import CustomNavbar from './CustomNavbar';
import locale from './locale';

describe('default custom navbar', ()=>{
    let currentContainer;
    beforeEach(()=>{
        const { container } = render(<CustomNavbar />);
        currentContainer = container;
    });
    it('always renders link to my pokemon', () => {
        const linkToMyPokemon = currentContainer.querySelector('[data-test="link-to-my-pokemon"]');
        expect(linkToMyPokemon).toHaveTextContent(locale.TO_MY_POKEMON);
    });
    
    it('renders link to home screen', () => {
        const linkToHomeScreen = currentContainer.querySelector('[data-test="link-to-home"]');
        expect(linkToHomeScreen).toBeInTheDocument();
    });
});

describe('have props backToList', ()=>{
    let currentContainer;
    beforeEach(()=>{
        const { container } = render(<CustomNavbar backToList />);
        currentContainer = container;
    });
    it('should render link to home', ()=>{
        const linkToPokemonList = currentContainer.querySelector('[data-test="link-to-pokemon-list"]');
        expect(linkToPokemonList).toHaveTextContent(locale.TO_POKEMON_LIST);
    });
});
