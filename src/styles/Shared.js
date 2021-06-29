import styled from "styled-components";

export const Container = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 30px 0;
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

export const Card = styled.div`
  border: 1px solid forestgreen;
  background-color: limegreen;
  color: white;
  border-radius: 8px;
  width: 200px;
  margin: 24px auto;
`;

export const CardImage = styled.div`
  background-color: ${(props) => props.theme.background};
  border-radius: 8px 8px 0 0;
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  width: 120px;
  margin: 0 auto;
`;

export const CardBody = styled.div`
  padding: 24px;
  background-color: limegreen;
  
  * {
    background-color: transparent;
    color: ${(props) => props.theme.background};
  }
`;
