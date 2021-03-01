import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Style from  '../../Style/Style'

export default props =>  {
    return (
        <View style={style.Display}>
            <Text style={[Style.txtCenter, style.DisplayTxt]}>
                {props.num}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    Display:{
        backgroundColor: '#000',
        padding: 20,
        width: 300,
    },
    DisplayTxt:{
        color: '#FFF'
    }
})