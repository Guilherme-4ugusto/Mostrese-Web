import styled from 'styled-components';

export const Container = styled.div`
    background: white;
    height: 100vmin;
`

export const ContentNavbar = styled.div`

`

export const Content = styled.div`
    height: 635px;
    display: flex;
    justify-content: center;
`

export const CenterContent = styled.div`
    height: 100%;
    width: 80%;
    display: flex;
    flex-direction: row;
    padding: 72px 0 72px 0;
`

export const CenterContentLeft = styled.div`
    height: 100%;
    width: 50%;
    color: #202f72;

    span{
        margin: 16px 0px 32px;
        font-size: 14px;
        font-weight: 600;
    }

    h1{
        font-size: 60px;
        font-weight: 900;
    }

    p{
        margin-top: 30px;
        font-size: 24px;
        font-weight: 400;
    }
`

export const CenterContentRight = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;

    img{
        height: 550px;
    }
`

export const Buttom = styled.div`
    width: 256px;
    height: 48px;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 35px;
    cursor: pointer;
    background: #202f72;
    color: #96f0b6;

    &:hover{
        width: 261px;
        height: 53px; 
        background: #293778;
    }
`

export const Card = styled.div`
    height: 400px;
    width: 300px;
    background: #222;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;

    &:hover{
        transition: all 0.4s ease-out;
        box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
        top: -4px;
        border: 1px solid  #FF4848;
        transform: translateY(-15px);

    }


`

export const IconArea = styled.div`
    height: 30%;
    background: blue
    display: flex;
    align-content: center;
`

export const Icon = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 80px;
    max-width:80px;
    background: linear-gradient(90deg, #FF7E7E 0%, #FF4848 40%, rgba(0, 0, 0, 0.28) 60%);
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    transition: all 0.8s ease;
    background-position: 0px;
    background-size: 200px;
    
    i{
        font-size: 35px
    }

    ${Card}:hover & i{
        color: #FF4848;
        -webkit-background-clip: text;
	    -webkit-text-fill-color: transparent;
        opacity: 1;
        transition: all 0.3s ease;
    }

    ${Card}:hover &{
        background-position: -120px;
        transition: all 0.3s ease;
    }
`
export const TituloArea = styled.div`
    color: white;
    height: 70%;
    display flex;
    flex-direction: column;
    align-items: center;

    h3{
        text-align: center;
    }

    .btn{
        background: white;
        border: 1px solid #FF4848;
        font-weight: bold;
        border-radius: 10px;
        color:#FF4848; 
        width: 50%;
    }

    .btn:hover{
        background: #FF4848;
        border: 1px solid #fff;
        color:#FFF; 
        font-weight: bold;
        transition: 0.3s;
    }
`
