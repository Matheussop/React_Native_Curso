import React from 'react'
import { Button, Text } from 'react-native'
import Style from  '../../Style/Style'

export default props =>  {

    function gerarNumero(min,max){
        return min + Math.floor((max - min) * Math.random());
    }

    return (
        <Button title="Gerar Número" 
            onPress={function() {
                const n = gerarNumero(props.min,props.max)
                props.funcao(n)
            }}
        />    
    )
}