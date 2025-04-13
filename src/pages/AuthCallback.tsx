
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

const AuthCallback = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const handleAuthCallback = async () => {
      const { error } = await supabase.auth.getSession();
      
      if (error) {
        toast({
          title: "Authentication error",
          description: error.message,
          variant: "destructive",
        });
        navigate('/sign-in');
        return;
      }
      
      toast({
        title: "Successfully authenticated",
        description: "You have been signed in successfully.",
      });
      
      // Redirect to home page
      navigate('/');
    };
    
    handleAuthCallback();
  }, [navigate, toast]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-deepblue-500 to-deepblue-dark">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-deepblue-600 mx-auto mb-4"></div>
        <h1 className="text-2xl font-bold text-deepblue-dark mb-2">Processing Authentication</h1>
        <p className="text-muted-foreground">Please wait while we complete your sign-in...</p>
      </div>
    </div>
  );
};

export default AuthCallback;
