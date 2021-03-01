import React from 'react'
import {Text} from 'react-native'
import Style from '../Style/Style'

export default ({a,b}) => {
    function random(max,min){
        let numero1,numero2
        return min + Math.floor((max - min) * Math.random());
    }

    return (
        <Text style={Style.txtCenter} > 
            Dois numeros entre {a} e {b}: { }
            <Text>
                {random(a,b)} e {random(a,b)}
            </Text>
        </Text>
    )
}