import styled from "styled-components";

export const Container = styled.div`
  grid-area: UD;

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--tertiary);

  padding: 10px;

  max-height: 100vh;

  > a {
    background-color: transparent;
  }
`;

export const Separator = styled.div`
  width: 32px;
  border-bottom: 2px solid var(--quaternary);

  margin-bottom: 8px;
`;
