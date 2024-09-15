import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FaEnvelope, FaLock, FaSpinner } from 'react-icons/fa';
import Image from 'next/image';
import Head from 'next/head';
import Link from "next/link";


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const logoutMessage = router.query.message;
    if (logoutMessage === 'loggedOut') {
      setMessage('You were logged out for security reasons. Please log in again.');
    }
  }, [router.query]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulating an API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    if (email === 'mphill2135@yahoo.com' && password === 'Monika90221$') {
      setLoginSuccess(true);
      localStorage.setItem('isLoggedIn', 'true');
      setTimeout(() => {
        router.push('/dashboard');
      }, 1500);
    } else {
      setMessage('Invalid email or password');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 to-blue-800 flex items-center justify-center p-4">
      <Head>
        <title>TiBank Login </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl">
        <div className="text-center">
         <Link href="/" > <Image src="/logo.png" alt="TirprivateBank Logo" width={100} height={100} className="mx-auto" /> </Link>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Welcome to TiBank</h2>
          <p className="mt-2 text-sm text-gray-600">Please sign in to your account</p>
        </div>
        {message && (
          <div className="mb-4 p-3 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
            <p className="font-bold">Notice</p>
            <p>{message}</p>
          </div>
        )}
        <form onSubmit={handleLogin} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
              disabled={isLoading}
            >
              {isLoading ? (
                <FaSpinner className="animate-spin h-5 w-5 mr-3" />
              ) : (
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <FaLock className="h-5 w-5 text-blue-500 group-hover:text-blue-400" />
                </span>
              )}
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
            Forgot your password?
          </a>
        </div>
      </div>
      {loginSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-xl text-center">
            <FaSpinner className="animate-spin h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Login Successful!</h2>
            <p className="text-gray-600">Redirecting to your account dashboard...</p>
          </div>
        </div>
      )}
    </div>
  );
}