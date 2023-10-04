import styled from "styled-components";
import { theme } from "../../../theme";
import { useState } from "react";

export default function Main() {
    //state

    //comportements

    //affichage(render)
  return (
    <MainStyled>
      <div className="basket">Basket</div>
      <div className="menu">Menu</div>
    </MainStyled>
  )
}


//stylecomponents
const MainStyled = styled.div`
    background: ${theme.colors.background_white};
    flex: 1;

    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

    display: grid;
    grid-template-columns: 25% 1fr;
    .basket {
      background: pink;
    }
    .menu {
      background: purple
    }
`;