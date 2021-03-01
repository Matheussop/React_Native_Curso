import React ,{useState} from 'react'
import { Text,View } from 'react-native'
import Style from  '../../Style/Style'
import ContadorDisplay from './ContadorDisplay'
import ContadorBotoes from './ContadorBotoes'

export default props =>  {
    const [num,setNum] = useState(0);

    const inc = () => setNum(num + 1);
    const dec = () => setNum(num - 1);


    return (
        <>
            <Text style={Style.txtBig}> 
                Contador V2
            </Text>
            <ContadorDisplay num={num}/>
            <ContadorBotoes inc={inc} dec={dec} />
        </>
    )
}