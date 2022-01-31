import React, {useState, useEffect} from 'react';
import '@coreui/coreui/dist/css/coreui.min.css';
import * as S from './style';

const Footer = () => {
  return (
    <S.Footer>
        <S.FooterColumn>
           <span style={{color: '#EBE7D9'}}>&copy; Mostre-SE - Todos os direitos reservados</span>
        </S.FooterColumn>
    </S.Footer>
 )
}

export default Footer;