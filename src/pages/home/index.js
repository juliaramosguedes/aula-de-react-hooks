import {
  Container,
  Title,
  Wrap,
} from "@/styles/shared";
import {
  Line,
  List
} from "./style";
import { useListPokemon } from "@/hooks";
import { Layout } from "@/components";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { loading, error, pokemonList } = useListPokemon(150);

  return (
    <Layout>
      <Container>
        <Wrap>
          <Title>150 Pokemon List</Title>
        </Wrap>
        {loading && <h3>Wait a moment</h3>}
        {!loading && error && <h3>Something went wrong. Try again later.</h3>}
        {!loading && pokemonList && (
          <List>
            {pokemonList.map(({ id, name }, index) => (
              <Line key={`pokemon-${index}`}><Link to={`/pokemon/${id}`}><b>{id}</b> {name}</Link></Line>
            ))}
          </List>
        )}
      </Container>
    </Layout>
  )
};

export default HomePage;
