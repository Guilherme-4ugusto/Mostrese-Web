import React, {useEffect, useState, forwardRef} from 'react';
import {Link} from 'react-router-dom';
import Navbar from "../../components/navbar_user/index";
import Footer from '../../components/footer_user/footer_user';
import Card from '../../components/card_artista/index'
import * as S from '../user_page/style';
import api from '../../services/api';

export default function ActionAreaCard() {
  const [artistas, setArtistas] = useState([]);  
  const useMountEffect = (fun) => useEffect(fun, [])
  async function buscarArtistas() {
    await api.get(`/artista`)
    .then(response => {
      setArtistas(response.data)
    })
  }
  useMountEffect(buscarArtistas)
  return (
    <S.Container >
      <Navbar />
      <S.CardContainer>
        <S.CardContainerCenter>
          <S.CardsCenter>
            {
                artistas.map(t => (
                  <Link to={`/viweartista/${t._id}`}>
                    <Card name={t.name} category={t.category} image={t.link_aws_image}/>
                  </Link>
                ))   
            }
          </S.CardsCenter>
        </S.CardContainerCenter>     
      </S.CardContainer>
      <Footer />
    </S.Container>
  );
}