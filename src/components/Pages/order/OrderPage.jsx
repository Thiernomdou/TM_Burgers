import { useParams } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
import Main from "./Main";
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
  background: orange;
  width: 100vh;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: red;
    height: 95vh;
    width: 95vh;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;