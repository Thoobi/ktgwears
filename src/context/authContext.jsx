import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { supabase } from "../lib/supaClient";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        setUser(user);
        setIsAuthenticated(!!user);
      } catch (error) {
        console.error("Auth check failed:", error);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user || null);
        setIsAuthenticated(!!session?.user);
        setLoading(false);
      }
    );

    // Initial check for session
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user || null);
      setIsAuthenticated(!!session?.user);
      setLoading(false);
    };
    getSession();

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleSignup = async (email, password, username) => {
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          display_name: username,
        },
      },
    });
    if (data) {
      console.log(data);
    }
    setLoading(false);
    return { data, error };
  };

  const handleLogin = async (email, password) => {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);
    if (error) {
      console.error("Error logging in:", error);
      return { data: null, error };
    }
    if (data) {
      console.log(data);
      setIsAuthenticated(true);
      setUser(data.user);
    }

    return { data, error: null };
  };

  const handleLogout = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signOut();
    setLoading(false);
    if (error) {
      console.error("Error logging out:", error);
      return { error };
    }
    setUser(null);
    setIsAuthenticated(false);
    setLoading(false);
    navigate("/auth", { replace: true });
    return { error: null };
  };

  const value = {
    handleSignup,
    loading,
    setLoading,
    isAuthenticated,
    setIsAuthenticated,
    user,
    setUser,
    handleLogin,
    handleLogout,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
