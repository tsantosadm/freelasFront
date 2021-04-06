import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  padding: 5px 3px;
  border-radius: 5px;
  transition: background-color 0.2s;
  background-color: transparent;
  margin-bottom: 16px;

  > div {
    display: flex;
    align-items: center;
    background-color: transparent;
  }

  > div span {
    margin-left: 5px;
    color: var(--symbol);
    background-color: transparent;
  }

  &:hover,
  &.active {
    background-color: var(--quinary);
    > div span {
      color: var(--white);
    }
  }
`;
