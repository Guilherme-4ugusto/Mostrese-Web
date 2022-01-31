import styled from 'styled-components';

export const CardContent = styled.nav`
    width: 250px;
    height: 350px;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;
    background: #999;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    cursor: pointer;
    clip-path: polygon(90% 0, 100% 7%, 100% 100%, 0% 100%, 0% 0%);

    &:hover{
       box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
       clip-path: polygon(100% 0, 100% 0%, 100% 100%, 0% 100%, 0% 0%);
    }

    img{
        height: 100%;
        width: 100%;
        transform: scale(1);
    }
`

export const CardHeader = styled.nav`
    height: 75%;
`

export const CardFooter = styled.nav`
    background: #222;
    color: white;
    height: 25%;
    padding: 10px 20px;
    text-transform: uppercase;
    font-family: sans-serif;
    font-weight: 700;
    font-style: italic;
    transition: inherit;

    ${CardContent}:hover &{
        padding: 10px 30px;
        background: #474747;
    }
`

