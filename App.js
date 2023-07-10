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
 import NavBar from './components/NavBar';
 import AddExpense from './components/AddExpense.jsx';
 import DetailTransaction from './components/DetailTransaction.jsx';
 import Budget from './components/Budget.jsx';
 import CreateBudget from './components/CreateBudget.jsx';
import Notification from './components/pages/Notification';
 
 const App = () => {
 
   const Stack = createNativeStackNavigator();
 
   return (
     <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
         <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
            <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
            <Stack.Screen name="SetAccount" component={SetAccount} options={{headerShown: false}}/>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
            <Stack.Screen name="NavBar" component={NavBar} options={{headerShown: false}}/>
            <Stack.Screen name="AddExpense" component={AddExpense} options={{headerShown: false}}/>
            <Stack.Screen name="DetailTransaction" component={DetailTransaction} options={{headerShown: false}}/>
            <Stack.Screen name="Budget" component={Budget} options={{headerShown: false}}/>
            <Stack.Screen name="CreateBudget" component={CreateBudget} options={{headerShown: false}}/>
            <Stack.Screen name="Notification" component={Notification} options={{headerShown: false}}/>
       </Stack.Navigator>
     </NavigationContainer>
   )
 }
 
 
 export default App;
 