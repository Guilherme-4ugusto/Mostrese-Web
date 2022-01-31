import React, {useState, useEffect} from 'react';
import * as S from '../artist_page/style';
import Navbar from "../../components/navbar_user/index";
import Footer from '../../components/footer/footer';
import api from '../../services/api';
import Header from '../../components/navbar_user';

function ArtistaPage({match}) {
  const [nome, setNome] = useState();
  const [nascimento, setNascimento] = useState();
  const [telefone, setTelefone] = useState();
  const [email, setEmail] = useState();
  const [categoria, setCategoria] = useState();
  const [historia, setHistoria] = useState();
  const [insta, setInsta] = useState();
  const [facebook, setFacebook] = useState();
  const [deezer, setDeezer] = useState();
  const [youtube, setYoutube] = useState();
  const [spotify, setSpotify] = useState();
  const [twitter, setTwitter] = useState();
  const [foto, setFoto] = useState();

  async function buscarArtista(){
    await api.get(`/artista/${match.params.id}`)
    .then(response => {
    setNome(response.data.name)
    setNascimento(response.data.birth_date)
    setTelefone(response.data.phone != 'undefined' ? response.data.phone : '')
    setEmail(response.data.email != 'undefined' ? response.data.email : '')  
    setCategoria(response.data.category)
    setHistoria(response.data.biography != 'undefined' ? response.data.biography : '')
    setInsta(response.data.link_instagram != 'undefined' ? response.data.link_instagram : '')
    setFacebook(response.data.link_facebook != 'undefined' ? response.data.link_facebook : '')
    setDeezer(response.data.link_deezer != 'undefined' ? response.data.link_deezer : '')
    setYoutube(response.data.link_youtube != 'undefined' ? response.data.link_youtube : '')
    setSpotify(response.data.link_spotify != 'undefined' ? response.data.link_spotify : '')
    setTwitter(response.data.link_twitter != 'undefined' ? response.data.link_twitter : '')
    setFoto(response.data.link_aws_image)
    })
  }

  useEffect(() => {
    buscarArtista();
  }, [])

  return (
    <S.Container>
        <Navbar/>
        <S.ImageDiv>
            <img src= {foto}/>
        </S.ImageDiv>
        <S.HistDiv>
            <h1><b>Biografia - {nome}</b></h1>
            <p><b>{historia}</b></p>
        </S.HistDiv>
        <Footer/>
    </S.Container>
  )
}

export default ArtistaPage;
