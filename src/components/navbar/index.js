import React, {useState, useEffect} from 'react';
import '@coreui/coreui/dist/css/coreui.min.css';
import * as S from './NavbarElement';
import logo2 from '../../assets/logo2.svg';
import { FaDoorClosed, FaDoorOpen } from "react-icons/fa";
import { Redirect} from 'react-router-dom';

const Header = () => {
  const [isMouseSobre, setMouseSobre] = useState(false);
  const [redirect, setRedirect] = useState(false);

  async function sair(){
    localStorage.removeItem('@mostrese/token');
    localStorage.removeItem('@mostrese/idAdmin');
    setRedirect(true);
  }

  return (
    <S.Navbar>
      {redirect && <Redirect to="/" />}
       <S.Leftside>
            <img src={logo2} alt="Logo" />
       </S.Leftside>
       <S.Rightside>
            <a class="link-sair" onClick={sair} onMouseEnter={() => setMouseSobre(true)} onMouseLeave={() => setMouseSobre(false)}>
                <b>Sair</b> <span>{isMouseSobre ? <FaDoorOpen/> : <FaDoorClosed/> }</span>
            </a>
       </S.Rightside>
    </S.Navbar>
 )
}

export default Header;