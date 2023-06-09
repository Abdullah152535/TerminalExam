import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Image
} from 'react-native';
import { useState,useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {doc , getDocs , collection,addDoc } from "firebase/firestore";
import { db } from '../../firebase';
import { Platform } from 'react-native';


const Login = ({navigation}) => {

    
    
            const [data, setData] = useState([]);
            const [loading, setLoading] = useState(false);
            const [error, setError] = useState(null);

            const addData = async () => {
                try {
                    const collectionRef = collection(db, 'Data'); // Replace 'items' with the actual name of your collection
                
                    for (const item of dummyData) {
                      const docRef = await addDoc(collectionRef, item);
                      console.log('Document added with ID:', docRef.id);
                    }
                  } catch (error) {
                    console.error('Error adding documents:', error);
                  }
              };
              
             

            useEffect(() => {
    
                const fetchData = async ()=>{
            
                  setLoading(true);
              
                  const colRef = collection(db , 'Data');
                  const dataSnap = await getDocs(colRef);
                  
                  const documents = [];
                  dataSnap.forEach(doc => {
                    documents.push(doc.data());
                  },[])
                  
                setData(documents);
                setLoading(false);
                }
            
                fetchData();
                console.log(data)
              },[]);
            

            return (
            <SafeAreaView>
                <View style={{display:"flex" , alignItems:"center"}}>
                    <Text style={{fontSize:24,marginTop:25,fontWeight:"bold"}}>Data From Firebase </Text>

            
                 
                 <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    renderItem={({ item }) => (
                        <RenderItem item={item} navigation={navigation} />
                    )}
                    keyExtractor={(item) => item.key}
                    />

        </View>
       </SafeAreaView>
    )
}
const RenderItem = ({ item,navigation }) => (
     <TouchableOpacity>
        <View style={{height:200,width:150,backgroundColor:"red",margin:20}}>
        <View>
            <Text style={{margin:20}}>
                {item.title}
            </Text>

            <Image source={{uri:item.image}} style={{height:50,width:50,margin:20}} />

            <Text>{item.price}</Text>
        </View>
     </View>
     </TouchableOpacity>
  );
  
     
const styles = StyleSheet.create(
    {
        button:{
            height:30,
            width:100,
            borderRadius:2,
            margin:20,
            borderWidth:1
        },
       
    }
)

export {Login};