import React, { useState } from 'react'
import { Text } from 'react-native'
import Style from  '../../Style/Style'

import Filho from './Filho'

export default props =>  { 
    let x = 13
    let y = 100

    const [num,setNum] = useState(0);

    function exibirValor(numero){
        setNum(numero);
    }


    return (
        <>
            <Text style={Style.txtBig}>{num}</Text>
            <Filho min={x} max={y} funcao={exibirValor} ></Filho>
        </>
    )
}