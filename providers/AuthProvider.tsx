// providers/AuthProvider.tsx
import React, { createContext, useContext, useEffect, useState, PropsWithChildren } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../firebase/FirebaseConfig';

type AuthData = {
  session: User | null;
  loading: boolean;
  profile: any;
  isAdmin: boolean;
};

const AuthContext = createContext<AuthData>({
  session: null,
  loading: true,
  profile: null,
  isAdmin: false,
});

export const AuthProvider = ({ children }: PropsWithChildren<{}>) => {
  const [session, setSession] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setSession(user);
        // Fetch user profile from Firebase (implement according to your Firebase setup)
        const userProfile = await fetchUserProfile(user.uid);
        setProfile(userProfile);
      } else {
        setSession(null);
        setProfile(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const fetchUserProfile = async (userId: string) => {
    // Implement fetching user profile logic here
    return {}; // Dummy implementation
  };

  const isAdmin = profile?.isAdmin || false;

  return (
    <AuthContext.Provider value={{ session, loading, profile, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
