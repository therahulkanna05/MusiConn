import "./UserContainer.css";
import { getDatabase, ref, child, get } from "firebase/database";
import React, { useState, useEffect } from 'react';
const userId = localStorage.getItem('userId');


const UserContainer = () => {

const dbRef = ref(getDatabase());

get(child(dbRef, `users/${userId}/userProfile`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

    return (
        <div className="userProfile">


        </div>
    );
};
export default UserContainer;