import styled from "styled-components";

export const Container = styled.div`
  grid-area: CHD;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: var(--primary);

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }

  > div {
    margin-top: 10px;
    background-color: transparent;
    display: flex;
    flex-direction: column;

    > div {
      margin-top: 10px;
      background-color: rgb(73, 71, 71);

      > span {
        color: red;
        background-color: transparent;
      }
    }
  }
`;
