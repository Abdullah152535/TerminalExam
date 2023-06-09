import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {  View } from 'react-native';
import { Home } from './Screens/Home';
import { Setting } from './Screens/Setting';
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
    screenOptions={ ({route}) =>({
        tabBarIcon:({focused,color,size}) =>{

            let screenName = route.name;
            

            if(screenName==="Home"){
                return <AntDesign name="home" size={24} color="black" />
            }
            else if(screenName==="Setting"){
                return <Octicons name="gear" size={24} color="black" />
            }
        },
        
            tabBarActiveTintColor: "red",
            tabBarInactiveTintColor: "gray",
            tabBarLabelStyle: {
              paddingBottom: 8,
              fontSize: 12
            },
            tabBarStyle:{
                height:100,
                paddingTop:15,
                paddingBottom:15,
                backgroundColor:"white",
            }
        

    })
    }

    >
        
      <Tab.Screen name="Home" component={Home}  options={{headerShown:false}}/>
      <Tab.Screen name="Setting" component={Setting} options={{headerShown:false}}/>
     
    </Tab.Navigator>
  );
}

export default Tabs;