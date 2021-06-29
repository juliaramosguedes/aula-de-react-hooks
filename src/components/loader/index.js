import React from "react";

import { Container, StyledLoader } from "./style";
import Layout from "../layout";

const Loader = () => (
  <Layout>
    <Container>
      <StyledLoader size={64}/>
    </Container>
  </Layout>
);

export default Loader;
