import React from 'react'
import { View, StyleSheet } from 'react-native'

export default props =>  {
    const lado = 50
    const style = StyleSheet.create({
        Quadrado:{
            height: lado,
            width: lado,
            backgroundColor: props.cor || '#000'
        }
    })

    return (
        <View style={style.Quadrado}>
             
        </View>
    )


}

