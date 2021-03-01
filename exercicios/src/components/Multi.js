import React from 'react'
import {Text} from 'react-native'
import Style from '../Style/Style'

function Comp(){
    return( 
        <Text style={Style.txtSmall} > Comp #Oficial</Text>
    )
}

function Comp1(){
    return( 
        <Text style={Style.txtMedium} > Comp #01</Text>
    )
}

function Comp2(){
    return( 
        <Text style={Style.txtBig} > Comp #01</Text>
    )
}

export  {Comp1, Comp2}
export default Comp