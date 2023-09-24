import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {BsPersonCircle} from "react-icons/bs"
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
        <hr />
        <h2>Connectez-vous</h2>
        <div className="input-with-icon">
          <BsPersonCircle className="icon"/>
          <input
            value={inputValue}
            onChange={handleChange}
            type="text"
            placeholder="Entrez votre prénom"
            required
          />
        </div>
        <button>Accédez à mon espace</button>
      </LoginFormStyled>
    </div>
  )
}
  //style components
  const LoginFormStyled = styled.form`
    background: green;
    text-align: center;
    max-width: 500px;
    min-width: 400px;
    margin: 0px auto;
    padding: 2.5rem 2rem;
    border-radius: 5px;
    font-family: "Amatic SC", cursive;

    hr {
      border: 1px solid #f56a2c;
      margin-bottom: 40px;
    }

    h1 {
      color: white;
      font-size: 48px;
    }

    h2 {
      margin: 20px 10px 10px;
      color: white;
      font-size: 36px;
    }

    .input-with-icon {
      background-color: #fff;
      border-radius: 5px;
      display: flex;
      align-items: center;
      padding: 18px 24px;
      margin: 18px 0;

      .icon {
        font-size: 15px;
        margin-right: 8px;
        color: #93a2b1;
      }
      
      input {
        background: #fff;
        border: none;
        font-size: 15px;
        color: #17161a;
      }

      &::placeholder {
        background: white;
        color: lightgray;
      }
    }
  `

