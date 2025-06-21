import { createContext } from 'preact';
import { useContext, useState, useEffect } from 'preact/hooks';
import authService from '../services/authService.js';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [processingAuth, setProcessingAuth] = useState(false);

  // Initialize authentication state
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        // Check if we're returning from authentication
        const urlParams = new URLSearchParams(window.location.search);
        const hasAuthParams = urlParams.has('csticket') && urlParams.has('username') && urlParams.has('fullname');
        
        if (hasAuthParams) {
          setProcessingAuth(true);
          const success = await authService.processAuthCallback();
          if (success) {
            const userInfo = authService.getUserInfo();
            setUser(userInfo);
          }
          setProcessingAuth(false);
        } else {
          // Check if user is already authenticated
          const isAuthenticated = authService.checkAuthenticationStatus();
          if (isAuthenticated) {
            const userInfo = authService.getUserInfo();
            setUser(userInfo);
          }
        }
      } catch (error) {
        console.error('Authentication initialization failed:', error);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const login = () => {
    authService.sendForAuthentication();
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  const value = {
    user,
    loading,
    processingAuth,
    login,
    logout,
    isAuthenticated: !!user?.isAuthenticated
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 