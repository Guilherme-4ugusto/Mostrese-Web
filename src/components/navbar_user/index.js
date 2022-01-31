import React, {useState, useEffect} from 'react';
import '@coreui/coreui/dist/css/coreui.min.css';
import * as S from './NavbarElement';
import logo2 from '../../assets/logo2.svg';
import { Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';

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
          <Link to={`/user`}>
            <img src={logo2} alt="Logo" />
          </Link>
       </S.Leftside>
       <S.Rightside>
       </S.Rightside>
    </S.Navbar>
 )
}

export default Header;