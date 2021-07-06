import styled from "styled-components";

export const List = styled.ul`
  margin: 0 auto;

  @media (min-width: 769px) {
    columns: 3;
  }
`;

export const Line = styled.li`
  line-height: 30px;

  a {
    color: ${(props) => props.theme.text};
  }
`;
