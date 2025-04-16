import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

// Make sure this matches exactly with the URL configured in Supabase dashboard
const REDIRECT_URL = import.meta.env.VITE_REDIRECT_URL || "http://localhost:8080/dash";

const AuthCallback = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        
        console.log('Auth response:', { data, error }); // Debug log
        
        if (error) throw error;
        
        if (!data.session) {
          throw new Error('No session data received');
        }

        const userId = data.session.user.id;
        const accessToken = data.session.access_token;

        toast({
          title: "Successfully authenticated",
          description: "You have been signed in successfully.",
        });

        // Redirect with auth data
        navigate(`/dash?userId=${userId}&token=${accessToken}`);
      } catch (error: any) {
        console.error('Authentication error:', error);
        toast({
          title: "Authentication error",
          description: error.message || 'Failed to authenticate',
          variant: "destructive",
        });
        navigate('/sign-in');
      }
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
