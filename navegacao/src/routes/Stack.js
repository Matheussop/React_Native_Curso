import React from 'react';
import { createStackNavigator} from '@react-navigation/stack'
import {Text, } from 'react-native'
import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';
import PassoStack from '../components/PassoStack';
import Tab from './Tab'
import Tab_2 from './Tab_2'
// import { Container } from './styles';

const Stack = createStackNavigator()

export default props =>(
    <Stack.Navigator initialRouteName="TelaA"
    screenOptions= {{headerShown: true}}>
        <Stack.Screen name="TelaA" 
        options={{title: "Informações Iniciais"}}>
            {props => (
                <PassoStack {...props} avancar="TelaB">
                    <Tab/>
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen name="TelaB" >
        {props => (
            <PassoStack {...props} avancar="TelaC" voltar avancarParams={{
                numero: 2
            }}>
                <TelaB/>
            </PassoStack>
        )}
        </Stack.Screen>
        <Stack.Screen name="TelaC">
        {props => (
            <PassoStack {...props} voltar avancarPush="TelaC" avancarParams={{
                numero: parseInt(Math.random()*100)
            }}>
                <Tab_2/>
            </PassoStack>
        )}
        </Stack.Screen>

    </Stack.Navigator>
)