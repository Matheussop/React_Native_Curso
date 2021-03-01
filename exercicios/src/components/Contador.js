import React, {useState} from 'react'
import {Text,Button} from 'react-native'

import Style from  '../Style/Style'

export default props => {
    //let numero = props.numeroInicial;
    const [numero, setNumero] = useState(props.numeroInicial)

    const inc= () => setNumero(numero + 1);
    const dec= () => setNumero(numero - 1);

    return(
        <>
            <Text style={Style.txtBig} >{numero}</Text>
            <Button title="+" onPress={inc}></Button>
            <Button title="-" onPress={dec}></Button>
        </>
    )
}