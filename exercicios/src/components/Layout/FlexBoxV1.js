import React from 'react'
import { StyleSheet, View } from 'react-native'
import Quadrado from './Quadrado'

export default props =>  {
    return (
        <View style={style.FlexV1}>
            <Quadrado/>
            <Quadrado cor='#900'/>
            <Quadrado cor='#090'/>
            <Quadrado cor='#009'/>
            <Quadrado cor='#099'/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV1:{
        flexGrow: 1,
        justifyContent: 'space-evenly',
        backgroundColor: '#f92',   
    }
})