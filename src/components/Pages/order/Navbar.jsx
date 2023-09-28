import styled from 'styled-components';
import NavbarRightSide from "./NavbarRightSide"
import Logo from "../../reusable-ui/Logo"

export default function Navbar({username}) {
    //state

    //comportements

    //affichage(render)
  return (
    <NavbarStyled>
      <Logo />
      <NavbarRightSide username={username}/>
    </NavbarStyled>
  )
}

//styledcomponents
const NavbarStyled = styled.nav`
    background: blue;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    /* align-items: center; */
`;
