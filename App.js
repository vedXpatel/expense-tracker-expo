/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   TouchableOpacity,
 } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import Login from './components/login/Login';
 import SignUp from './components/login/SignUp';
 import SetAccount from './components/newAccount/SetAccount';
 import Home from './components/Home.jsx';
 
 
 const App = () => {
 
   const Stack = createNativeStackNavigator();
 
   return (
     <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
         <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
            <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
            <Stack.Screen name="SetAccount" component={SetAccount} options={{headerShown: false}}/>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
       </Stack.Navigator>
     </NavigationContainer>
   )
 }
 
 
 export default App;
 