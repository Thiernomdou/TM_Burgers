import styled from "styled-components";
import {fakeMenu1, fakeMenu2} from "../../../../fakeData/fakeMenu"
import { useState } from "react";
import {theme} from "../../../../theme"
import Product from "./Product";

export default function Menu() {
    //state
    const [menu, setMenu] = useState(fakeMenu2)
    //comportementsmenu

    //affichage(render)
  return (
    <MenuStyled>
        {menu.map((produit) => {
          return (
          // <Product imageSource={produit.imageSource} title={produit.title} price={produit.imageSource}/>
          <Product {...produit}/>
          )
        })}
    </MenuStyled>
  ) 
}

//stylecomponents
const MenuStyled = styled.div`
      background: ${theme.colors.background_white};
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-row-gap: 60px;
      padding: 50px 50px 150px;
      justify-items: center;
      box-shadow: 0px 8px 20px 8px rgba(0,0,0,0.2) inset;
`;
