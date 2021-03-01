import React from 'react';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import TelaA_2 from '../views/TelaA_2';
import TelaB_2 from '../views/TelaB_2';
import TelaC_2 from '../views/TelaC_2';

// import { Container } from './styles';

const Tab = createBottomTabNavigator()

export default props =>(
    <Tab.Navigator tabBarOptions={{
        activeTintcolor: 'red',
        inactiveTintColor: 'blue',
        labelStyle: {
            fontSize: 30
        }
    }} initialRouteName="TelaA">
        <Tab.Screen name="TelaA_2" component={TelaA_2}/>
        <Tab.Screen name="TelaB_2" component={TelaB_2}/>
        <Tab.Screen name="TelaC_2" component={TelaC_2}/>
    </Tab.Navigator>
)