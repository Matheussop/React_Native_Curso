import React from 'react'
import { StyleSheet, View } from 'react-native'

export default props =>  {
    return (
        <View style={style.FlexV4}>
            <View style={style.V0}/>
            <View style={style.V1}/>
            <View style={style.V2}/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV4:{
        flexGrow:1,
        width:'100%',
        backgroundColor: '#f92',   
    },
    V0:{
        backgroundColor: '#090',   
        height:  0,
    },
    V1:{
        flexGrow:1,
        backgroundColor: '#f92900',   
    },
    V2:{
        flexGrow:2,
        backgroundColor: '#099',   
    }
})