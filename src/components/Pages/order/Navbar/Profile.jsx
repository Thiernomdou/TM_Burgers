import { Link } from "react-router-dom";
import styled from "styled-components";
import {BsPersonCircle} from "react-icons/bs"
import {theme} from "../../../../theme"


export default function Profile({username}) {
    //state

    //comportements

    //affichage(render)
  return (
    <ProfileStyled>
        <div className="info">
            <p>
                Hey, <b>{username}</b>
            </p>
            <Link to="/">
                <div className="description">
                    <small>Se déconnecter</small>
                </div>
            </Link>
        </div>
        <div className="picture">
            <BsPersonCircle />
        </div>
    </ProfileStyled>
  )
}

//styledComponents
const ProfileStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 100px;
    padding-left: 50px;

    .info {
        text-align: center;
        margin-right: 10px;
    
        p {
            margin: 0;
            color: ${theme.colors.greyBlue};
            b{
                color: ${theme.colors.primary};
            }
        }
        a {
            text-decoration: none;
            .description {
                &:hover {
                    text-decoration: underline;
                    color: ${theme.colors.greyDark};
                }
                small {
                    font-size: ${theme.fonts.size.XXS};
                    color: ${theme.colors.greyBlue};
                    font-weight: ${theme.fonts.weights.medium};
                    text-decoration: none;
                    position: relative;
                    bottom: 2px;
                }
            }
        }
    }

    .picture {
        height: auto;
        display: flex;
        height: 100%;
        font-size: ${theme.fonts.size.P4};
        color: ${theme.colors.greyBlue};
    }
`;