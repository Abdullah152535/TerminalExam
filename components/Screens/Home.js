import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { updateUserActivity } from '../../UpdateActivity';
import { useState,useEffect } from 'react';
const Home = (navigation) => {

    useEffect(()=>{
        updateUserActivity("Home");
    })
    return (
        
       <SafeAreaView>
         <View>
            
            <Text>Home</Text>
        </View>
       </SafeAreaView>
    )
}

export {Home};