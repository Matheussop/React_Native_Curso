import React from 'react';
import {Text} from 'react-native'
import TextoCentral from '../components/TextoCentral';

// import { Container } from './styles';

export default props =>{
        const r = props.route
        const numero = r && r.params && r.params.numero 
        ? props.route.params.numero : 0

       return(
                <TextoCentral corFundo={'#9932cd'}>Tela C_2 - 
                {numero} 
                </TextoCentral>
       )
}