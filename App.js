import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from './components/Screens/Login';
import { SignUp } from './components/Screens/SignUp';
import Tabs from './components/Tabs'

const Stack = createStackNavigator();

export default function App() {
  return (
   
       <NavigationContainer>
         <Stack.Navigator screenOptions={{ headerShown: false }}
         initialRouteName='Login'
         >
           <Stack.Screen name="Login" component={Login} />
           <Stack.Screen name="SignUp" component={SignUp} />
           <Stack.Screen name="Tabs" component={Tabs} />
         </Stack.Navigator>
       </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
