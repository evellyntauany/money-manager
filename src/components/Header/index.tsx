import { HeaderContainer, HeaderContent } from "./styles";

import logo from "../../assets/Logo.svg"

export default function Header(){
      return(
          <HeaderContainer>
            <HeaderContent>
                  <img src={logo} alt="logo da pagina"/>

                  <button>Nova Transacao</button>
            </HeaderContent>
          </HeaderContainer>
      )
}