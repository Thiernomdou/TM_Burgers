import { Link } from 'react-router-dom'
import styled from 'styled-components';

export default function Navbar({username}) {
    //state

    //comportements

    //affichage(render)
  return (
    <NavbarStyled>
      <div className="left-side">
        Left
      </div>
      <div className="right-side"> 
        Right
        <h1>Bonjour {username}</h1>
        <Link to="/">
        <button>Déconnexion</button>
        </Link>
      </div>
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
    .right-side{
      background: purple;
    }
`;
