import { useState } from "react";
import { useFormik } from "formik";

import {
  Button,
  Card,
  CardBody,
  CardImage,
  Error,
  Form,
  Image,
  Input,
} from "../styles/SearchPageStyle";
import {
  Container,
  Title,
  Wrap,
} from "../styles/Shared";
import { Layout } from "../components";
import useGetPokemon from "../hooks/useGetPokemon";

const SearchPage = () => {
  const [searchInput, setSearchInput] = useState(null);
  const formik = useFormik({
      initialValues: {
        pokemon: "",
      },
      onSubmit: (values) => {
        setSearchInput(values.pokemon.toLowerCase());
      }
    });

  const { loading, error, pokemon } = useGetPokemon(searchInput);

  return (
    <Layout>
      <Container>
        <Wrap>
          <Title>Capture a pokémon</Title>
          <Form onSubmit={formik.handleSubmit}>
            <label htmlFor="pokemon" hidden>Input a pokémon name or number</label>
            <Input
              type="text"
              name="pokemon"
              placeholder="Pokémon name or number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.pokemon}
            />
            <Button type="submit">Go!</Button>
            {error && <Error>* Invalid name or number</Error>}
          </Form>
        </Wrap>
        {!loading && pokemon && (
          <Wrap>
            <Title>Gotcha!</Title>
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
        <Title>See the complete list. <a href="/">Click here</a>.</Title>
      </Container>
    </Layout>
  )
};

export default SearchPage;
