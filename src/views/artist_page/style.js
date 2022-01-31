import styled from 'styled-components';

export const Container = styled.div`

`
export const ImageDiv = styled.div`
    -webkit-box-shadow: inset 0px 0px 100px rgba(0,0,20,1);
    background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.342) 0%,rgba(0, 0, 0, 0.349) 60%), -webkit-linear-gradient(20deg, rgba(0, 0, 0, 0.5) 0%,rgba(255,0,0,0) 30%);
    display: table;
    width: 100%;
    height: 700px;

    img{
        -webkit-filter: sepia(0%) brightness(80%) contrast(120%);
        position: relative;
        object-fit: cover;
        width:100%;
        height: 700px;
    }
`

export const HistDiv = styled.div`;
    height: 25%;
    padding: 60px 80px;
    text-transform: uppercase;
    font-family: sans-serif;
    background: #999;

    h1{
        margin-bottom: 20px;
    }
`
