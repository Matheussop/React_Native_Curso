import React from 'react'
import { Button, StyleSheet, View } from 'react-native'

export default props =>  {
    return (
        <View style={style.Botoes}>
            <Button color="red" title="+" onPress={props.inc}/>
            <Button color="darkred"  title="-" onPress={props.dec}/> 
        </View>
    )
}

const style = StyleSheet.create({
    Botoes: {
        flexDirection: "row"
    }
})