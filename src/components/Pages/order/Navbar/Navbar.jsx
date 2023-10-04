import styled from 'styled-components';
import NavbarRightSide from "./NavbarRightSide"
import Logo from "../../../reusable-ui/Logo"
import { theme } from '../../../../theme';
import { refreshPage } from '../../../../utils/window';

export default function Navbar({username}) {
    //state

    //comportements

    //affichage(render)
  return (
    <NavbarStyled>
      <Logo onClick={refreshPage} className={"logo-order-page"}/>
      <NavbarRightSide username={username}/>
    </NavbarStyled>
  )
}

//styledcomponents
const NavbarStyled = styled.nav`
    background: ${theme.colors.white};
    height: 10vh;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;

    border-top-left-radius: ${theme.borderRadius.extraRound};
    border-top-right-radius: ${theme.borderRadius.extraRound};
    /* align-items: center; */

    .logo-order-page {
      cursor: pointer;
    }
`;