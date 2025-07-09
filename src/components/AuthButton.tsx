
import React from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const AuthButton = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast.error('Error signing out');
    } else {
      toast.success('Signed out successfully');
      navigate('/');
    }
  };

  if (user) {
    return (
      <Button onClick={handleSignOut} variant="outline" className="border-african-gold/20 hover:bg-african-gold/10">
        Sign Out
      </Button>
    );
  }

  return (
    <Button onClick={() => navigate('/auth')} className="btn-primary">
      Sign In
    </Button>
  );
};

export default AuthButton;
