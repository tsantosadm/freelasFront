import styled from "styled-components";

export const Container = styled.div`
  grid-area: CHD;

  display: flex;
  flex-direction: column;

  background-color: var(--primary);
`;

export const Pedidos = styled.div`
  margin-top: 50px;
  background-color: transparent;
  font-size: 28px;
`;

export const Demands = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  height: 286px;
  background-color: white;

  max-height: calc(100vh -200px);
`;

export const DemandsF = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  height: 630px;
  background-color: white;

  max-height: calc(100vh -200px);
`;

export const Selection = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 700px;
  background-color: transparent;

  > Select {
    ::placeholder,
    ::-webkit-input-placeholder {
      color: red;
    }
  }
`;
