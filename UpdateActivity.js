
import { db } from "./firebase";
import {doc ,  updateDoc } from "firebase/firestore";

export const updateUserActivity = async (name) => {

    try {
        await updateDoc(doc(db, "Users", "Activity"), {
            ScreenName:name
          });
        console.log('ScreenName updated successfully');
      } catch (error) {
        console.error('Error updating document:', error);
      }
    

  };
  