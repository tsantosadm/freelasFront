import styled from "styled-components";

// HB - HeaderBar
// HB - Col Meio
// HB - Col Direita

// UD - User Data
// CD - Col Dados
// UL - User List

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 240px auto 240px;
  grid-template-rows: 50px auto;

  grid-template-areas:
    "HB HB HB"
    "UD CHD UL";

  height: 100vh;
`;
