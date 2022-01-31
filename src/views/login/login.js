import React, {useState, useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Redirect} from 'react-router-dom';
import Paper from '@mui/material/Paper';
import api from '../../services/api';

function Login({match}){
  const [redirect, setRedirect] = useState(false);
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [menssagem, setMenssagem] = useState();
  const theme = createTheme();
  const Swal = require('sweetalert2');

  async function guardarLogin(data){
    await localStorage.setItem('@mostrese/token', data.token);
    await localStorage.setItem('@mostrese/idAdmin', data.admin._id);
    setRedirect(true);
  }

  async function efetuarLogin(){
      if(!email){
        Swal.fire({
            icon: 'error',
            title: 'Calma!',
            text: 'Você esqueceu de nos informar o email!!',
        })    
      }else if(!senha){
        Swal.fire({
            icon: 'error',
            title: 'Calma!',
            text: 'Você esqueceu de nos informar a senha!',
        })
      }else{  
        await api.post('/autenticacao/login', {
            email: email,
            password: senha
          })
          .then(function (response) {
                guardarLogin(response.data);
          })
          .catch(function (error){
            Swal.fire({
                icon: 'error',
                title: 'Ops!',
                text: error.response.data.error
            })
          });
      }   
  }

  return (
    <ThemeProvider theme={theme}>
    <Grid container component="main" sx={{ height: '100vh' }}>
      {redirect && <Redirect to="/app" /> }
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://i.ibb.co/NmLHmGY/login.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Entrar
          </Typography>
          <Box component="form" noValidate  sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={e => setEmail(e.target.value)} value={email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={e => setSenha(e.target.value)} value={senha}
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={efetuarLogin}
            >
              Entrar
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  </ThemeProvider>
  );
}

export default Login;