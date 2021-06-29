import styled from "styled-components";

export const Input = styled.input`
  border: 1px solid forestgreen;
  border-radius: 8px 0 0 8px;
  padding: 8px;
  width: calc(300px - 44px);
  margin: 24px 0 16px;
  height: 42px;
`;

export const Button = styled.button`
  border: 1px solid forestgreen;
  background-color: limegreen;
  color: white;
  border-radius: 0 8px 8px 0;
  padding: 8px;
  margin: 0 auto;
  height: 42px;
`;

export const Error = styled.p`
  color: red;
  font-style: italic;
`;

export const Form = styled.form`
  margin-bottom: 36px;
`;
