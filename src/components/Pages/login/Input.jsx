import styled from "styled-components";


export default function Input({value, onChange, Icon, ...extraProps}) {
  //state

  //comportements

  //affichage(render)
  return (
    <Inputstyled>
      {Icon && Icon}
      <input
        value={value}
        onChange={onChange}
        type="text"
        {...extraProps}
      />
    </Inputstyled>
  )
}


//styled components spécifique à mon input
const Inputstyled = styled.div`
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
    width: 100%;
  }

  &::placeholder {
    background: white;
    color: lightgray;
  }
  
`;