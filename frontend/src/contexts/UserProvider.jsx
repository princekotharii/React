import React, { useState, useEffect } from "react";
import UserContext from "./UserContext";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // ✅ STEP 1: Page load hone par localStorage se data load karo
  useEffect(() => {
    const savedUser = localStorage.getItem('user');  // ← localStorage se 'user' key read kiya
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));  // ← JSON string ko object mein convert karke state mein set kiya
      } catch (error) {
        console.log("Error loading user from localStorage:", error);
        localStorage.removeItem('user');
      }
    }
  }, []);

  // ✅ STEP 2: Login function - Yeh setUser ko replace karega
  const login = (userData) => {
    console.log("Saving user to localStorage:", userData);  // ← Debug ke liye
    setUser(userData);  // ← React state mein save
    localStorage.setItem('user', JSON.stringify(userData));  // ← localStorage mein save
  };

  // ✅ STEP 3: Logout function
  const logout = () => {
    console.log("Removing user from localStorage");  // ← Debug ke liye
    setUser(null);  // ← State se remove
    localStorage.removeItem('user');  // ← localStorage se remove
  };

  return (
    <UserContext.Provider value={{ 
      user, 
      setUser: login,  // ← IMPORTANT: setUser ko 'login' function se replace kiya
      logout
    }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;