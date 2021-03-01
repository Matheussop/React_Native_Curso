import React from 'react';
import {Text,View,Button} from 'react-native'
import TextoCentral from '../components/TextoCentral';

// import { Container } from './styles';

export default props =>{

       return(
               <View style={{flex:1}}>
                        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                                <Button title="Abrir" onPress={() =>{
                                        props.navigation.openDrawer()
                                        setTimeout(() => {
                                                props.navigation.closeDrawer()
                                                setInterval(() => {
                                                        props.navigation.toggleDrawer()
                                                }, 1000)
                                        }, 3000)
                                }
                        }/>
                        </View>
                        <View style={{flex:1}}>
                                <TextoCentral corFundo={'#91223d'}>Tela D 
                                </TextoCentral>
                        </View>
               </View>
       )
}