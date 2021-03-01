import React from 'react'
import {Text} from 'react-native'
import Style from '../Style/Style'

export default (param) => {

    function maxMin(a,b) {
        return a > b ?  t = [a,b] : t = [b,a]
    };


    [txt, txt2] = maxMin(param.a,param.b)
    return (
        <Text style={Style.txtCenter} > 
            O valor {txt} é maior que o valor {txt2}!
        </Text>
    )
}