import React from 'react'
import { Text, Platform } from 'react-native'
import Style from  '../Style/Style'

export default _ =>  {
   
    if(Platform.OS === 'android') {
        return (<Text style={Style.txtBig}>Android</Text>)
    }else if(Platform.OS === 'ios'){
        return (<Text style={Style.txtBig}>iOS</Text>)
    }else{
        return (<Text style={Style.txtBig}>Outras plataforma</Text>)
    }
}