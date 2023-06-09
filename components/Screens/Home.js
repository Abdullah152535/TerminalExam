import React, { useContext } from 'react';
import {
    View,
    Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { updateUserActivity } from '../../UpdateActivity';
import { useState,useEffect } from 'react';

import { useIsFocused } from '@react-navigation/native';
import { ThemeContext } from '../../context/themecontext';

const Home = (navigation) => {

    const isFocused = useIsFocused();

    const color = useContext(ThemeContext);

    const [bgcolor,setbgcolor] =useState(color);


    useEffect(()=>{
        if (isFocused) {
            updateUserActivity('Home');
           
          }
    },[isFocused])
    return (
        
       <SafeAreaView style={{backgroundColor:{bgcolor}}}>
         <View>
            
            <Text>Home</Text>
        </View>
       </SafeAreaView>
    )
}

export {Home};