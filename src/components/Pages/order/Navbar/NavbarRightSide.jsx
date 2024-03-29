import styled from "styled-components";
import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { theme } from "../../../../theme";
import { useState } from "react";
import ToastAdmin from "./ToastAdmin";

export default function NavbarRightSide({username}) {
    //state
    const [isModeAdmin, setIsModeAdmin] = useState(false)
    //comportements
    const displayToastNotification = () => {
        if(!isModeAdmin) {
            toast.info("Mode admin activé", {
                // icon: <FaUserSecret size={30} />,
                theme: "dark",
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              })
        }
        setIsModeAdmin(!isModeAdmin)
    }

    //affichage(render)
    return (
    <NavbarRightSideStyled> 
        <ToggleButton 
            labelIfUnchecked="ACTIVER LE MODE ADMIN" 
            labelIfChecked="DÉSACTIVER LE MODE ADMIN"
            onToggle={displayToastNotification}
        />
        <Profile username={username}/>
        <ToastAdmin />
      </NavbarRightSideStyled>
  )
}

//styledcomponents
const NavbarRightSideStyled = styled.div`
    display: flex;
    align-items: center;
    padding-right: 50px;


    .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }

`;
