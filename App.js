import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from './src/pages/LogIn';
import {Register} from './src/pages/Register';
import {Home} from './src/pages/Home';
import {SignUp} from "./src/pages/SignUp";
import {Occurrence} from "./src/pages/Occurrence";

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                <Stack.Screen name="Register" component={Register} options={{
                    headerShown: true, title: "Registrar", headerStyle: {
                        backgroundColor: '#037',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }} />
                <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
                <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
                <Stack.Screen name="Occurrence" component={Occurrence} options={{
                    headerShown: true, title: "Ocorrências", headerStyle: {
                        backgroundColor: '#037',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
