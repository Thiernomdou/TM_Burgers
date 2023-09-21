
import styled from "styled-components";
import LoginForm from "./LoginForm";
import Logo from "../../reusable-ui/Logo";

export default function LoginPage() {
    //state
    

    //comportements
    


    
    

    //affichage (render)
  return (
    <LoginPageStyled>
      <Logo />
      <LoginForm />
    </LoginPageStyled>
  )
  
}

//styled components
const LoginPageStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;



  ::before {
    content: "";
    background: url("/images/burger-and-fries-background.jpg");
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`
