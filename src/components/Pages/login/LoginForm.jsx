import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function LoginForm() {
    //state
    const [inputValue, setInputValue] = useState("")

    const navigate = useNavigate()

    //comportements
    const handleSubmit = (event) => {
        event.preventDefault();
        setInputValue("");
        navigate(`order/${inputValue}`)
    }

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    //affichage(render)
  return (
    <div>
      <LoginFormStyled action="submit" onSubmit={handleSubmit}>
        <h1>Bienvenue chez nous !</h1>
        <br />
        <h2>Connectez-vous</h2>
        <input value={inputValue} onChange={handleChange} type="text" placeholder="Entrez votre prénom" required/>
        <button>Accédez à mon espace</button>
      </LoginFormStyled>
    </div>
  )
}
  //style components
  const LoginFormStyled = styled.form`
    background: green;
    display: flex;
    flex-direction: column;
  `
