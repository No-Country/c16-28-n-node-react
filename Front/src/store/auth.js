import { create } from 'zustand';
// import { persist } from 'zustand/middleware';

export const useAuthStore = create(
  // persist(
  //   (set) => ({
  //     token: null,
  //     setToken: (token) =>
  //       set((state) => ({
  //         token,
  //       })),
  //   }),
  //   {
  //     name: 'auth',
  //   }
  // )
);

/*const React = require('react');
const localStorage = require('local-storage');

// Define the AuthContextType for clarity (optional)
const AuthContextType = {
  isAuthenticated: Boolean,
  user: Object | undefined,
  saveUser: (data: Object) => void,
  saveToken: (token: string) => void,
};

// Create the AuthContext object
const AuthContext = {
  isAuthenticated: false,
  user: undefined,
  saveUser: () => {},
  saveToken: () => {},
};

// AuthProvider component
function AuthProvider(props) {
  const [user, setUser] = React.useState(getUser()); // Use state to manage user data

  // Function to save user data to local storage
  function saveUser(data) {
    setUser(data);
    localStorage.setItem('user', JSON.stringify(data));
  }

  // Function to get token from local storage
  function getToken() {
    return localStorage.getItem('token');
  }

  // Function to get user data from local storage
  function getUser() {
    const userString = localStorage.getItem('user');
    return userString ? JSON.parse(userString) : undefined;
  }

  // Function to save token to local storage
  function saveToken(token) {
    localStorage.setItem('token', token);
  }

  // Memoized value for isAuthenticated
  const isAuthenticated = React.useMemo(() => {
    return !!getToken(); // Check if token exists
  }, [getToken]);

  // Provide context values to children
  return (
    React.createElement(AuthContext.Provider, { value: { isAuthenticated, user, saveUser, saveToken } }, props.children)
  );
}

// Hook to access AuthContext
function useAuth() {
  return React.useContext(AuthContext);
}

// Export components and hook
module.exports = { AuthProvider, useAuth };*/