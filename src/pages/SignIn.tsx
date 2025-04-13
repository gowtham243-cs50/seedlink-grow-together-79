
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Lock, Eye, EyeOff, Leaf, LogIn } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { supabase } from "@/integrations/supabase/client";

const REDIRECT_URL = "https://localhost:8081";

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Check if already logged in
  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        window.location.href = REDIRECT_URL;
      }
    };
    
    checkSession();
    
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session) {
          window.location.href = REDIRECT_URL;
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) throw error;
      
      toast({
        title: "Welcome back!",
        description: "You have successfully signed in.",
      });
      
      // Direct redirection will be handled by the auth state listener
    } catch (error: any) {
      toast({
        title: "Error signing in",
        description: error.message || "There was an error signing in. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin + '/auth/callback'
        }
      });
      
      if (error) throw error;
      
      // Redirect is handled by Supabase
    } catch (error: any) {
      toast({
        title: "Error signing in with Google",
        description: error.message || "There was an error signing in with Google. Please try again.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Form */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center mb-8">
            <div className="flex justify-center items-center mb-6">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-seedlink-green to-seedlink-darkgreen mr-2 flex items-center justify-center">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-display font-bold">SeedLink</span>
            </div>
            <h1 className="text-3xl font-bold text-deepblue-dark">Welcome Back</h1>
            <p className="text-muted-foreground mt-2">Sign in to continue to your account</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-deepblue-600">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium text-deepblue-600">
                    Password
                  </label>
                  <Link 
                    to="/forgot-password" 
                    className="text-sm font-medium text-seedlink-green hover:text-seedlink-darkgreen"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="pl-10 pr-10"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-3 text-muted-foreground hover:text-deepblue-600"
                  >
                    {showPassword ? 
                      <EyeOff className="h-5 w-5" /> : 
                      <Eye className="h-5 w-5" />
                    }
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="remember" 
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                  />
                  <label
                    htmlFor="remember"
                    className="text-sm font-medium text-muted-foreground cursor-pointer"
                  >
                    Remember me
                  </label>
                </div>
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-deepblue-500 to-deepblue-dark hover:from-deepblue-dark hover:to-deepblue-800 text-white py-6"
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign In"}
              <LogIn className="ml-2 h-5 w-5" />
            </Button>

            <div className="relative flex items-center justify-center mt-6">
              <Separator className="absolute w-full" />
              <span className="relative px-2 bg-background text-sm text-muted-foreground">
                Or continue with
              </span>
            </div>

            <Button 
              type="button"
              variant="outline"
              className="w-full border-2 border-deepblue-100 hover:bg-deepblue-100/10 hover:border-deepblue-300 flex items-center justify-center gap-2 py-6"
              onClick={handleGoogleSignIn}
              disabled={isLoading}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 48 48" 
                width="22px" 
                height="22px"
                className="mr-2"
              >
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
              </svg>
              Sign in with Google
            </Button>
            
            <div className="text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link 
                to="/sign-up" 
                className="font-medium text-seedlink-green hover:text-seedlink-darkgreen"
              >
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
      
      {/* Right side - Image and background */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-deepblue-500 to-deepblue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
            alt="Agriculture" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center p-12 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">Growing Communities Together</h2>
          <p className="text-lg text-center max-w-md text-white/90 mb-8">
            Join our platform that connects investors with farmers to create sustainable 
            agricultural growth and prosperity for all.
          </p>
          <div className="grid grid-cols-2 gap-6 w-full max-w-md">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="font-bold text-xl mb-1">18%</h3>
              <p className="text-sm text-white/80">Average Annual Returns</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="font-bold text-xl mb-1">2,500+</h3>
              <p className="text-sm text-white/80">Farmers Supported</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
