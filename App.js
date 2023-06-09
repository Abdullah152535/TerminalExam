import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from './components/Screens/Login';
import { SignUp } from './components/Screens/SignUp';
import Tabs from './components/Tabs'
import ThemeContext from './context/themecontext';

const Stack = createStackNavigator();


export default function App() {



  return (
   <ThemeProvider>
     <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}
    initialRouteName='Login'
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Tabs" component={Tabs} />
    </Stack.Navigator>
  </NavigationContainer>
   </ThemeProvider>
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
