import { Container } from "../styles/Shared";
import {
  Title,
  Wrap,
} from "../styles/Shared";
import {
  Line,
  List
} from "../styles/HomePageStyle";
import useListPokemon from "../hooks/useListPokemon";

const HomePage = () => {
  const { loading, error, pokemonList } = useListPokemon(150);

  return (
    <Container>
      <Wrap>
        <Title>150 Pokemon List</Title>
      </Wrap>
      {loading && <h3>Wait a moment</h3>}
      {!loading && error && <h3>Something went wrong. Try again later.</h3>}
      {!loading && pokemonList && (
        <List>
          {pokemonList.map(({ id, name }) => (
            <Line><a href={`/pokemon/${id}`}><b>{id}</b> {name}</a></Line>
          ))}
        </List>
      )}
    </Container>
  )
};

export default HomePage;
