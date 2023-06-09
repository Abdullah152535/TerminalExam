
import React, { createContext, useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import {doc , getDocs , collection,addDoc, } from "firebase/firestore";
import { db } from '../firebase';
export const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {
  const [themeColor, setThemeColor] = useState('');

  useEffect(() => {
    const fetchThemeColor = async () => {
      try {
        
        const docRef = db.collection('theme').doc('mode');
        const docSnapshot = await docRef.get();

        if (docSnapshot.exists) {
          const Color = docSnapshot.data().color;
          console.log(docSnapshot);
          setThemeColor(Color);
        }
      } catch (error) {
        console.log('Error fetching theme color:', error);
      }
    };

    fetchThemeColor();
  });

  return (
    <ThemeContext.Provider value={themeColor}>{children}</ThemeContext.Provider>
  );
};
