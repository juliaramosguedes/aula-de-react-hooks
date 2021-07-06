import { useState } from "react";
import { useFormik } from "formik";

import {
  Button,
  Error,
  Form,
  Input,
} from "./style";
import {
  Card,
  CardBody,
  CardImage,
  Container,
  Image,
  Title,
  Wrap,
} from "@/styles/shared";
import { Layout } from "@/components";
import { useGetPokemon } from "@/hooks";

const SearchPage = () => {
  const [searchInput, setSearchInput] = useState(null);
  const formik = useFormik({
    initialValues: {
      pokemon: "",
    },
    onSubmit: (values) => {
      setSearchInput(values.pokemon.toLowerCase());
    },
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
                  (ability, index) => (<li key={"ability " + index}>{ability}</li>),
                )}</ul>
              </CardBody>
            </Card>
          </Wrap>
        )}
      </Container>
    </Layout>
  );
};

export default SearchPage;
