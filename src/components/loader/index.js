import React from "react";

import { Container, StyledLoader } from "./style";
import Layout from "@/components/layout";
import { useTheme } from "@/contexts";

const Loader = () => {
  const { theme } = useTheme();

  return (
    <Layout>
      <Container>
        <StyledLoader size={64} color={theme === "light" ? "black" : "white"}/>
      </Container>
    </Layout>
  );
};

export default Loader;
