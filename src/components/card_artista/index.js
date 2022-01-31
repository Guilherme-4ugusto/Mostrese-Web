import * as S from './style';

const card = ({name, category, image}) => {

  return (
    <S.CardContent>
        <S.CardHeader>
            <img src={image}/>
        </S.CardHeader>
        <S.CardFooter>
            <span style={{fontSize: '18px'}}>{name}</span>
            <br/>
            <span style={{fontSize: '16px'}}>{category}</span>
        </S.CardFooter>
    </S.CardContent>
 )
}

export default card;