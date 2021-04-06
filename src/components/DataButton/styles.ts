import styled from "styled-components";

import { Props } from ".";

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 0;

  width: 48px;
  height: 48px;
  border-radius: 50%;

  margin-top: 18px;
  margin-bottom: 18px;

  background-color: ${(props) =>
    props.isUser ? "var(--rocketseat)" : "var(--primary)"};

  position: relative;
  cursor: pointer;
`;
