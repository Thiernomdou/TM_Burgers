import { useParams } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import { theme } from "../../../theme";

export default function OrderPage() {

    //state
    const {username} = useParams()

    //comportements

    //affichage
  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar username={username}/>
        <Main />
      </div>
    </OrderPageStyled>
  )
}

//styled components
const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  width: 1500px;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;