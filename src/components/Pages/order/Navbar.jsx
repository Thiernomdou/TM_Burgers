
import styled from 'styled-components';
import NavbarRightSide from "./NavbarRightSide"

export default function Navbar({username}) {
    //state

    //comportements

    //affichage(render)
  return (
    <NavbarStyled>
      <div className="left-side">
        Left
      </div>
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
    /* align-items: center; */

    .left-side{
      background: pink;
    }
`;
