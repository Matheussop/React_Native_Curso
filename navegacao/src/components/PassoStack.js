import React from 'react';
import {Button, Text, View} from 'react-native'

// import { Container } from './styles';

export default props => (
        <View style={{
            flex:1
        }}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            {props.avancar ? 
                <Button title={'Avançar'} onPress={() =>{
                    props.navigation.navigate(props.avancar, props.avancarParans)
                }}/> :
                false
            }
            {props.avancarPush ? 
                <Button title={'Avançar'} onPress={() =>{
                    props.navigation.push(props.avancarPush, props.avancarParams)
                }}/> :
                false
            }
            {props.voltar ? 
                <Button title={'Voltar'} onPress={() =>{
                    props.navigation.goBack()
                }}/> :
                false
            }
            </View>
            <View style={{flex:1}}>
                {props.children}
            </View>
        </View>
)