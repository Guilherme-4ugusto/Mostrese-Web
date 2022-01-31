import React, {useState, useEffect} from 'react';
import { Redirect, useHistory} from 'react-router-dom';
import * as S from '../gerenciar_artista/style';
import Navbar from "../../components/navbar/index"
import Footer from '../../components/footer/footer';
import api from '../../services/api';
import defaultImage from '../../assets/default_image_artista.jpg'

function Task({match}) {
  const [redirect, setRedirect] = useState(false);
  const [nome, setNome] = useState();
  const [nascimento, setNascimento] = useState();
  const [telefone, setTelefone] = useState();
  const [email, setEmail] = useState();
  const [categoria, setCategoria] = useState();
  const [foto, setFoto] = useState(defaultImage);
  const [historia, setHistoria] = useState();
  const [insta, setInsta] = useState();
  const [facebook, setFacebook] = useState();
  const [deezer, setDeezer] = useState();
  const [youtube, setYoutube] = useState();
  const [spotify, setSpotify] = useState();
  const [twitter, setTwitter] = useState();
  const  [imagemPreviwe, setImagem] = useState(defaultImage);
  const Swal = require('sweetalert2');
  const history = useHistory();

  async function buscarArtista(){
    await api.get(`/artista/${match.params.id}`)
    .then(response => {
    setNome(response.data.name)
    setNascimento(response.data.birth_date)
    setTelefone(response.data.phone != 'undefined' ? response.data.phone : '')
    setEmail(response.data.email != 'undefined' ? response.data.email : '')  
    setCategoria(response.data.category)
    setImagem(response.data.link_aws_image)
    setFoto(response.data.link_aws_image)
    setHistoria(response.data.biography != 'undefined' ? response.data.biography : '')
    setInsta(response.data.link_instagram != 'undefined' ? response.data.link_instagram : '')
    setFacebook(response.data.link_facebook != 'undefined' ? response.data.link_facebook : '')
    setDeezer(response.data.link_deezer != 'undefined' ? response.data.link_deezer : '')
    setYoutube(response.data.link_youtube != 'undefined' ? response.data.link_youtube : '')
    setSpotify(response.data.link_spotify != 'undefined' ? response.data.link_spotify : '')
    setTwitter(response.data.link_twitter != 'undefined' ? response.data.link_twitter : '')
    })
  }

  function adicionaPreviwe() {
    var imgInp = document.getElementById("imgInp");
    var blah = document.getElementById("blah");
    const [file] = imgInp.files
    if (file) {
      blah.src = URL.createObjectURL(file)
    }
  }

  function abreInput(){
    var imgInp = document.getElementById("imgInp");
    imgInp.click();
  }

 async function Salvar(){
    let data = new FormData();
    data.append('link_aws_image',foto);
    data.append('name',nome);
    data.append('birth_date',nascimento);
    data.append('phone',telefone);
    data.append('email',email);
    data.append('category',categoria);
    data.append('biography', historia);
    data.append('link_instagram', insta);
    data.append('link_facebook', facebook);
    data.append('link_deezer', deezer);
    data.append('link_youtube', youtube);
    data.append('link_spotify', spotify);
    data.append('link_twitter', twitter);
    const headers = {
        headers: {
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'multipart/form-data',
            autorizacao: `Bearer ${localStorage.getItem('@mostrese/token')}`
        }

    }
    if(match.params.id){
        console.log(data);
        await api.put(`/artista/${match.params.id}`, data, headers)
        .then(function(response){
            Swal.fire({
                icon: 'success',
                title: 'Boa!',
                text: 'Atualizamos o artista!!',
            })   
            history.push(`/artistas`);
        }).catch(function(error){
            Swal.fire({
                icon: 'error',
                title: 'Ops!',
                text: error.response.data.error
            }) 
        })
    }else{
        await api.post('/artista', data, headers)
        .then(function(response){
            Swal.fire({
                icon: 'success',
                title: 'Boa!',
                text: 'Salvamos o artista!!',
            })
            history.push(`/artistas`);
        }).catch(function(error){
            Swal.fire({
                icon: 'error',
                title: 'Ops!',
                text: error.response.data.error
            })  
        })
        
    } 
 }

  useEffect(() => {
    if(true)
    setRedirect(true);
    buscarArtista();
  }, [])

  return (
    <S.Container>
        <Navbar />
        <S.Titulo>
            <h1>Artista</h1>
        </S.Titulo>
        <S.Linha>
            <hr></hr>
        </S.Linha>
        <S.InputsArea style={{marginBottom: '20px'}}>
            <S.InputsCenter>
              <S.InputCenterLeft>
                <S.InputImage>
                    <img id="blah" title='Adicione uma foto do artista' src={imagemPreviwe} onClick={abreInput}/>
                    <input type="file" id='imgInp' onChange={e => {setFoto(e.target.files[0]); adicionaPreviwe()}}/>
                </S.InputImage> 
                <S.Input>
                    <div class="form__group field" style={{width: '90%'}}>
                        <input type="input" class="form__field" placeholder="Name" name="name" id='name' required onChange={e => setNome(e.target.value)} value={nome}/>
                        <label for="name" class="form__label">Nome</label>
                    </div>
                </S.Input>
                <S.Input>
                    <div class="form__group field" style={{width: '90%'}}>
                        <input type="date" class="form__field" name="dt_nascimento" id='dt_nascimento' required onChange={e => setNascimento(e.target.value)} value={nascimento}/>
                        <label for="dt_nascimento" class="form__label">Data Nascimento</label>
                    </div>
                </S.Input>
                <S.Input>
                    <div class="form__group field" style={{width: '90%'}}>
                        <input type="input" class="form__field" placeholder="Telefone" name="telefone" id='telefone' required onChange={e => setTelefone(e.target.value)} value={telefone}/>
                        <label for="telefone" class="form__label">Telefone</label>
                    </div>
                </S.Input>
                <S.Input>
                    <div class="form__group field" style={{width: '90%'}}>
                        <input type="email" class="form__field" placeholder="Email" name="email" id='email' required onChange={e => setEmail(e.target.value)} value={email}/>
                        <label for="email" class="form__label">Email</label>
                    </div>
                </S.Input>
                <S.Input>
                    <div class="form__group field" style={{width: '90%'}}>
                        <input type="input" class="form__field" placeholder="Categoria" name="categoria" id='categoria' required onChange={e => setCategoria(e.target.value)} value={categoria}/>
                        <label for="categoria" class="form__label">Categoria</label>
                    </div>
                </S.Input>  
                <button type="button" onClick={Salvar}>SALVAR</button>
              </S.InputCenterLeft>
              <S.InputCenterRight>
                <S.Input>
                    <div class="form__group field" style={{width: '90%'}}>
                        <input type="input" class="form__field" placeholder="Instagram" name="instagram" id='instagram' required onChange={e => setInsta(e.target.value)} value={insta}/>
                        <label for="instagram" class="form__label">Instagram</label>
                    </div>
                </S.Input> 
                <S.Input>
                    <div class="form__group field" style={{width: '90%'}}>
                        <input type="input" class="form__field" placeholder="Facebook" name="facebook" id='facebook' required onChange={e => setFacebook(e.target.value)} value={facebook}/>
                        <label for="facebook" class="form__label">Facebook</label>
                    </div>
                </S.Input>  
                <S.Input>
                    <div class="form__group field" style={{width: '90%'}}>
                        <input type="input" class="form__field" placeholder="Deezer" name="deezer" id='deezer' required onChange={e => setDeezer(e.target.value)} value={deezer}/>
                        <label for="deezer" class="form__label">Deezer</label>
                    </div>
                </S.Input> 
                <S.Input>
                    <div class="form__group field" style={{width: '90%'}}>
                        <input type="input" class="form__field" placeholder="Youtube" name="youtube" id='youtube' required onChange={e => setYoutube(e.target.value)} value={youtube}/>
                        <label for="youtube" class="form__label">Youtube</label>
                    </div>
                </S.Input> 
                <S.Input>
                    <div class="form__group field" style={{width: '90%'}}>
                        <input type="input" class="form__field" placeholder="Spotify" name="spotify" id='spotify' required onChange={e => setSpotify(e.target.value)} value={spotify}/>
                        <label for="spotify" class="form__label">Spotify</label>
                    </div>
                </S.Input> 
                <S.Input>
                    <div class="form__group field" style={{width: '90%'}}>
                        <input type="input" class="form__field" placeholder="Twitter" name="twitter" id='twitter' required onChange={e => setTwitter(e.target.value)} value={twitter}/>
                        <label for="twitter" class="form__label">Twitter</label>
                    </div>
                </S.Input>  
                <S.Input>
                    <div class="form__group field" style={{width: '90%'}}>
                        <textarea style={{height: '155px'}} type="input" class="form__field" placeholder="Historia" name="historia" id='historia' required onChange={e => setHistoria(e.target.value)} value={historia}/>
                        <label for="historia" class="form__label">Historia</label>
                    </div>
                </S.Input>  
              </S.InputCenterRight>
            </S.InputsCenter>
        </S.InputsArea>
        <Footer/>
    </S.Container>
  )
}

export default Task;
