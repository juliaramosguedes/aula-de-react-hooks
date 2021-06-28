import { useParams } from "react-router-dom";

import {
  Card,
  CardBody,
  CardImage,
  Image,
} from "../styles/SearchPageStyle";
import {
  Container,
  Title,
  Wrap,
} from "../styles/Shared";
import { Layout } from "../components";
import useGetPokemon from "../hooks/useGetPokemon";

const PokemonPage = () => {
  let { id } = useParams();

  const { loading, error, pokemon } = useGetPokemon(id);

  return (
    <Layout>
      <Container>
        <Wrap>
          <Title>Do you know this Pokémon?</Title>
        </Wrap>
        {!loading && error && <h3>Something went wrong. Try again later.</h3>}
        {!loading && pokemon && (
          <Wrap>
            <Card>
              <CardImage>
                <Image src={pokemon.image} alt={pokemon.name}/>
              </CardImage>
              <CardBody>
                <h2>{pokemon.name}</h2>
                <p>Number: {pokemon.id}</p>
                <p>Type: {pokemon.type}</p>
                <span>Abilities: </span>
                <ul>{pokemon.abilities.map(
                  (ability, index) => (<li key={"ability " + index}>{ability}</li>)
                )}</ul>
              </CardBody>
            </Card>
          </Wrap>
        )}
      </Container>
    </Layout>
)
};

export default PokemonPage;
