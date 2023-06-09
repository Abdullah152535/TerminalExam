
import React, { createContext, useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeColor, setThemeColor] = useState('');

  useEffect(() => {
    const fetchThemeColor = async () => {
      try {
        const db = firebase.firestore();
        const docRef = db.collection('yourCollection').doc('yourDocument');
        const docSnapshot = await docRef.get();

        if (docSnapshot.exists) {
          const themeColor = docSnapshot.data().themeColor;
          setThemeColor(themeColor);
        }
      } catch (error) {
        console.log('Error fetching theme color:', error);
      }
    };

    fetchThemeColor();
  }, []);

  return (
    <ThemeContext.Provider value={themeColor}>{children}</ThemeContext.Provider>
  );
};
