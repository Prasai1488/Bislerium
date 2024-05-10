import React, { createContext, useContext, useState } from 'react';

// Create the context
const AuthContext = createContext(null);

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null); // Null when not logged in

    // Placeholder for login method
    const login = (userData) => {
        setCurrentUser(userData);
    };

    // Placeholder for logout method
    const logout = () => {
        setCurrentUser(null);
    };

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
    return useContext(AuthContext);
};
