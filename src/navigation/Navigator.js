import React, {useRef} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Home from '../components/home'

const Stack = createStackNavigator();
const WelcomeScreen = () =>{
    return(

        <Stack.Navigator screenOptions = {{ harderShown : false }}>
            <Stack.Screen name="Welcome" component={Home}/>
        </Stack.Navigator>
    )
}

const Navigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome" screenOptions = {{ harderShown : false }}>
                <Stack.Screen name="welcomeStack" component={WelcomeScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}