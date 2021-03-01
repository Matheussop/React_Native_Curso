import React from 'react'
import { StyleSheet, View } from 'react-native'
import Quadrado from './Quadrado'

export default props =>  {
    return (
        <View style={style.FlexV2}>
            <Quadrado/>
            <Quadrado cor='#900'/>
            <Quadrado cor='#090'/>
            <Quadrado cor='#009'/>
            <Quadrado cor='#099'/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV2:{
        flex:1,
        width:'100%',
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
        backgroundColor: '#f92',   
    }
})