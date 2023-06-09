import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { updateUserActivity } from '../../UpdateActivity';
import { useState,useEffect } from 'react';

import { useIsFocused } from '@react-navigation/native';


const Home = (navigation) => {

    const isFocused = useIsFocused();

    useEffect(()=>{
        if (isFocused) {
            updateUserActivity('Home');
           
          }
    },[isFocused])
    return (
        
       <SafeAreaView>
         <View>
            
            <Text>Home</Text>
        </View>
       </SafeAreaView>
    )
}

export {Home};