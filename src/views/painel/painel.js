import React, {useEffect, useState} from 'react';
import isAutenticated from '../../utils/auth';
import Navbar from "../../components/navbar/index"
import Footer from '../../components/footer/footer';
import { Redirect, Link} from 'react-router-dom';
import * as S from '../painel/style';
import { FaUserAlt } from "react-icons/fa";
import iconAdmin from '../../assets/admin-icon.svg';
import iconArtista from '../../assets/artista-icon.svg';
import iconObras from '../../assets/obras-icon.png';

export default function ActionAreaCard() {
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    if(!isAutenticated && !localStorage.getItem('@mostrese/token')){
      setRedirect(true);
    }
  })

  return (
    <S.Container>
        {redirect && <Redirect to="/" />}
        <S.ContentNavbar>
          <Navbar />
        </S.ContentNavbar>
        <S.Content style={{background: '#96f0b6'}}>
           <S.CenterContent>
             <S.CenterContentLeft>
              <span>ADMINISTRADORES</span>
              <h1>Gerencie Administradores</h1>
              <p>Use essa parte do sistema para adicionar, editar e excluir administradores.</p>
              <S.Buttom><b>GERENCIAR ADMINISTRADORES</b></S.Buttom>
             </S.CenterContentLeft>
             <S.CenterContentRight>
               <img src={iconAdmin} />
             </S.CenterContentRight>
           </S.CenterContent>
        </S.Content>
        <S.Content style={{background: '#F46EBE'}}>
        <S.CenterContent>
             <S.CenterContentLeft>
              <span>ARTISTAS</span>
              <h1>Gerencie Artistas</h1>
              <p>Mostre novos artistas ao mundo e gerencie artistas já existentes. </p>
              <Link to="/artistas" style={{textDecoration: 'none'}}>
                <S.Buttom><b style={{color: "#F46EBE"}}>GERENCIAR ARTISTAS</b></S.Buttom>
              </Link>
             </S.CenterContentLeft>
             <S.CenterContentRight>
               <img src={iconArtista} />
             </S.CenterContentRight>
           </S.CenterContent> 
        </S.Content>
        <S.Content style={{background: '#1E90FF'}}>
          <S.CenterContent>
             <S.CenterContentLeft>
                <span>OBRAS</span>
                <h1>Gerencie Obras</h1>
                <p>Insira mais cultura na plataforma ou gerencie obras já existentes. </p>
                <S.Buttom><b style={{color: "#1E90FF"}}>GERENCIAR OBRAS</b></S.Buttom>
                </S.CenterContentLeft>
                <S.CenterContentRight>
                  <img src={iconObras} />
                </S.CenterContentRight>
            </S.CenterContent> 
        </S.Content>
        <Footer />
    </S.Container>

  );
}