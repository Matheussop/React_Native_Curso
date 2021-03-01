import React from 'react'
import { Text, View } from 'react-native'
import Style from  '../Style/Style'

export default ({number = 0}) =>  {
   
    return ( 
        <View>
            <Text style={Style.txtBig}>O Resultado eh:</Text>
            {number % 2 === 0
                ? <Text style={Style.txtBig}>Par</Text>
                : <Text style={Style.txtBig}>Impar</Text>
            }
        </View>
    )
}