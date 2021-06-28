import styled from "styled-components";

export const Container = styled.section`
  max-width: 800px;
  margin: 0 auto 60px;
  min-height: calc(100vh - 150px);
`

export const Wrap = styled.div`
  max-width: 300px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.title};
  text-align: center;
  a {
    color: ${(props) => props.theme.text};
  }
`;
