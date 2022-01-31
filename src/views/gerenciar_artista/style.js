import styled from 'styled-components';

export const Container = styled.div`
    background-color: #FFF;
    height: 100vmin;
`
export const Titulo = styled.div`
    h1{
        font-size: 44px;
        margin: 20px 0px 0px 50px;
    }

`

export const Linha = styled.div`
    display: flex;
    justify-content: center; 
    hr{  
        width: 95%;
    }
`

export const InputsArea = styled.div`
    display: flex;
    justify-content: center;

`

export const InputsCenter = styled.div`
    width: 95%;
    display: flex;
    flex-direction: row;
`

export const InputCenterLeft = styled.div`
    width: 50%;

    button{
        margin-top: 20px;
        background: #202f72;
        color: #FFF;
        width: 30%;
        height: 40px;
        border-radius: 20px;
        outline: inherit;
        border: none;
        transition: 0.3s;
    }

    button:hover{
        background: #2d3f91;
    }
`

export const InputCenterRight = styled.div`
   width: 50%;
`

export const InputImage = styled.div`
    img{
        border-radius:50%; 
        height: 250px;
        width: 250px;
        cursor: pointer;
    }

    input{
        display:none
    }
`

export const Input = styled.div`
    .form__group {
    position: relative;
    padding: 15px 0 0;
    margin-top: 10px;
    width: 50%;
    }

    .form__field {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid #9b9b9b;
    outline: 0;
    font-size: 1.3rem;
    color: #9b9b9b;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;

        &::placeholder {
            color: transparent;
        }

        &:placeholder-shown ~ .form__label {
            font-size: 1.3rem;
            cursor: text;
            top: 20px;
        }
    }   

    .form__label {
        position: absolute;
        top: 0;
        display: block;
        transition: 0.2s;
        font-size: 1rem;
        color: #9b9b9b;
    }

    .form__field:focus {
    ~ .form__label {
        position: absolute;
        top: 0;
        display: block;
        transition: 0.2s;
        font-size: 1rem;
        color: #11998e;
        font-weight:700;    
    }
        padding-bottom: 6px;  
        font-weight: 700;
        border-width: 3px;
        border-image: linear-gradient(to right, #11998e,#38ef7d);
        border-image-slice: 1;
    }
/* reset input */
.form__field{
  &:required,&:invalid { box-shadow:none; }
}

`




