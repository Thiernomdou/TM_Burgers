import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NavbarRightSide({username}) {
    //state

    //comportements

    //affichage(render)
    return (
    <NavbarRightSideStyled> 
        Right
        <h1>Bonjour {username}</h1>
        <Link to="/">
        <button>Déconnexion</button>
        </Link>
      </NavbarRightSideStyled>
  )
}

//styledcomponents
const NavbarRightSideStyled = styled.div`
    background: purple;
`;
