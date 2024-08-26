// pages/logout.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    // In a real app, you'd clear the session or token here.
    router.push('/login');
  }, [router]);

  return null;
}
