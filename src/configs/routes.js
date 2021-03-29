import HomeScreen from '../pages/HomeScreen';
import PokemonList from '../pages/PokemonList';
import PokemonDetail from '../pages/PokemonDetail';
import MyPokemonList from '../pages/MyPokemonList';

const routes = {
  "/": () => <HomeScreen/>,
  "/pokemon": () => <PokemonList />,
  "/pokemon/:name": ({name}) => <PokemonDetail name={name} />,
  "/my-pokemon": () => <MyPokemonList />
};

export default routes;