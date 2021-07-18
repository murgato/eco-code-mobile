import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from './src/pages/LogIn';
import {Register} from './src/pages/Register';
import {Home} from './src/pages/Home';
import {SignUp} from "./src/pages/SignUp";
import {Occurrence} from "./src/pages/Occurrence";
import {Cam} from "./src/pages/Cam";

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                    <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
                    <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
                    <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
                    <Stack.Screen name="Occurrence" component={Occurrence} options={{headerShown: false}}/>
                    <Stack.Screen name="Cam" component={Cam} options={{headerShown: false}}/>
                </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
