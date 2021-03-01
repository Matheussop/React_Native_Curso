import React from 'react'
import {Button, View} from 'react-native'

export default props =>{
    let a = 10;
    let b = props.b;
    executar = () => console.warn('executado')
    executar1 = () => {
        console.warn('executar quando abrir')
        a += 10;
        b += 10;
        return function teste(){
            console.warn('Valor de A: ', {a})
            console.warn('Valor de B: ', {b})
        }
    }

    return(
        <View>
        <Button title="Executar!" onPress={executar1()}></Button>
        <Button title="Executar!" onPress={executar}></Button>
        </View>
    )
}