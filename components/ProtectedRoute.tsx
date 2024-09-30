// components/ProtectedRoute.tsx
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    const authenticated = localStorage.getItem('authenticated');
    if (!authenticated) {
      router.push('/password');
    }
  }, []);

  return <>{children}</>;
};

export default ProtectedRoute;