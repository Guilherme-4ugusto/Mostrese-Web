import styled from 'styled-components';

export const Navbar = styled.nav`
  background: #222;
  height: 80px;
  display: flex;
  
`

export const Leftside = styled.nav`
    width: 50%;
    display: flex;
    align-items: center;

    img{       
        height: 40px; 
        margin-left: 20px;
    }

    @media (max-width: 600px){
        img{
            height: 25px;
        }
    }
    
`

export const Rightside = styled.nav`
    width: 50%;
    color: white;
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: end;

    .link-sair{
        text-decoration: none;
        color: #EBE7D9;
        margin-right: 20px;
        font-size: 18px;
        cursor: pointer;
    }

    .link-sair span{
        text-decoration: none;
        margin-right: 20px;
        font-size: 28px;  
    }

    .link-sair:hover{
        color: white;
    }
`

