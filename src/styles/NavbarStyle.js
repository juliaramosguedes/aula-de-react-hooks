import styled, { css } from "styled-components";
import { Sun, Moon } from "styled-icons/feather";

export const Nav = styled.nav`
  width: 100%;
  height: 60px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

const icon = css`
  color: ${(props) => props.theme.text};
  cursor: pointer;
  transition: all 0.5s;
`;

export const StyledSun = styled(Sun)`
  ${icon}
`;

export const StyledMoon = styled(Moon)`
  ${icon}
`;

export const ListItem = styled.li`
  display: inline;
  & + li {
    margin-left: 16px;
  }
  
  a {
    color: ${(props) => props.theme.title};
  }
`