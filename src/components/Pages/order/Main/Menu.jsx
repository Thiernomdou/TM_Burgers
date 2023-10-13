import styled from "styled-components";
import {fakeMenu2} from "../../../../fakeData/fakeMenu"
import { useState } from "react";
import {theme} from "../../../../theme"
import { formatPrice } from "../../../../utils/maths";
import Card from "../../../reusable-ui/Card";

export default function Menu() {
    //state
    const [menu, setMenu] = useState(fakeMenu2)
    //comportementsmenu

    //affichage(render)
  return (
    <MenuStyled>
        {menu.map((card) => {
          return (
            <Card
              imageSource={card.imageSource} 
              title={card.title} 
              leftDescription={formatPrice(card.price)} 
              key={card.id}
            />
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
