import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { supabase } from "../lib/supaClient";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

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
      if (data.user?.identities?.length === 0) {
        toast.error("User with email already exists");
      } else {
        toast.success("Account created successfully!", {
          onAutoClose: () => {
            setLoading(false);
            setTimeout(() => {
              navigate("/auth");
            }, 1000);
          },
        });
      }
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
      toast.success("Login successful!", {
        onAutoClose: () => {
          setIsAuthenticated(true);
          setUser(data.user);
          setTimeout(() => {
            setLoading(false);
            navigate("/user");
          }, 1000);
        },
      });
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
    return { error: null };
  };

  const getUser = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      return user;
    } catch (error) {
      console.error("Error getting user:", error);
      return null;
    }
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
    getUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
