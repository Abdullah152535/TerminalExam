import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const Home = (navigation) => {
    return (
       <SafeAreaView>
         <View>
            <Text>Home</Text>
        </View>
       </SafeAreaView>
    )
}

export {Home};