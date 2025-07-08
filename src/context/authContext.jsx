import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { supabase, adminAuthClient, supabaseAdmin } from "../lib/supaClient";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLoginLoading, setisLoginLoading] = useState(false);
  const [isSignupLoading, setisSignupLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [adminUser, setAdminUser] = useState(null);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const state = location.state;

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
        setisLoginLoading(false);
        setisSignupLoading(false);
      }
    );

    // Initial check for session
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user || null);
      setIsAuthenticated(!!session?.user);
      setIsLoading(false);
    };
    getSession();

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleSignup = async (email, password, username) => {
    setisSignupLoading(true);
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
            setisSignupLoading(false);
            setTimeout(() => {
              navigate("/auth");
            }, 1000);
          },
        });
      }
    }
    setisSignupLoading(false);
    return { data, error };
  };

  const handleLogin = async (email, password) => {
    setisLoginLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setisLoginLoading(false);
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
            setisLoginLoading(false);
            if (state?.from) {
              navigate(state?.from);
              navigate("/user");
            }
          }, 1000);
        },
      });
    }

    return { data, error: null };
  };

  const handleAdminSignup = async (email, password) => {
    setisSignupLoading(true);
    const { data, error } = await adminAuthClient.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: {
        display_name: "KTG",
        role: "admin",
      },
      options: {
        emailRedirectTo: `${window.location.origin}/admin/login`,
      },
    });
    setisSignupLoading(false);
    if (error) {
      console.error("Error creating admin user:", error);
      toast.error(error.message);
      return { data: null, error };
    }
    if (data.user) {
      const { error: profileError } = await supabaseAdmin
        .from("profiles")
        .upsert({
          id: data.user.id,
          role: "admin",
        });

      if (profileError) throw profileError;
      toast.success("Admin account created successfully!", {
        onAutoClose: () => {
          navigate("/admin/login");
          setisSignupLoading(false);
        },
      });
    }
    return { data, error: null };
  };

  const handleAdminLogin = async (email, password) => {
    try {
      setIsLoading(true);

      // Sign in with email and password
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      // Verify if the user is an admin by checking profiles table
      const { data: profileData, error: profileError } = await supabaseAdmin
        .from("profiles")
        .select("role")
        .eq("id", data.user.id)
        .single();

      if (profileError) throw profileError;

      // Check if user has admin role
      if (profileData.role !== "admin") {
        await supabase.auth.signOut();
        throw new Error("Unauthorized: Not an admin user");
      }

      // Set user data in context/state
      setAdminUser(data.user);
      setIsAdminAuthenticated(true);

      toast.success("Admin login successful");
      navigate("/admin/dashboard");

      return { data, error: null };
    } catch (error) {
      console.error("Admin login error:", error);
      toast.error(error.message);
      return { data: null, error };
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    setIsLoading(true);
    const { error } = await supabase.auth.signOut();
    setIsLoading(false);
    if (error) {
      console.error("Error logging out:", error);
      return { error };
    }
    setUser(null);
    setIsAuthenticated(false);
    setIsLoading(false);
    return { error: null };
  };

  const handleAdminLogout = async () => {
    setIsLoading(true);
    const { error } = await supabase.auth.signOut();
    setIsLoading(false);
    if (error) {
      console.error("Error logging out:", error);
      toast.error(error.message);
      return { error };
    }
    setAdminUser(null);
    setIsAdminAuthenticated(false);
    toast.success("Admin logged out successfully", {
      onAutoClose: () => {
        navigate("/admin/login");
      },
    });
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
    isSignupLoading,
    setisSignupLoading,
    isLoginLoading,
    setisLoginLoading,
    isAuthenticated,
    setIsAuthenticated,
    user,
    setUser,
    handleLogin,
    handleLogout,
    isLoading,
    getUser,
    handleAdminSignup,
    handleAdminLogin,
    adminUser,
    isAdminAuthenticated,
    handleAdminLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
