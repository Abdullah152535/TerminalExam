import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { updateUserActivity } from '../../UpdateActivity';
import { useState,useEffect } from 'react';
const Setting = (navigation) => {

    useEffect(()=>{
        updateUserActivity("Setting");
    })


    return (
       <SafeAreaView>
         <View>
            <Text>Setting</Text>
        </View>
       </SafeAreaView>
    )
}

export {Setting};