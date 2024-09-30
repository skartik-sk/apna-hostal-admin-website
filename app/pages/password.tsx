// pages/password.tsx
import { useState } from 'react';
import { useRouter } from 'next/router';

const PasswordPage = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Replace 'your-secure-password' with the actual password or fetch it from the database
    const correctPassword = 'your-secure-password';

    if (password === correctPassword) {
      localStorage.setItem('authenticated', 'true');
      router.push('/');
    } else {
      setError('Incorrect password');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handlePasswordSubmit} className="p-4 bg-white rounded shadow-md">
        <h1 className="mb-4 text-xl font-bold">Enter Password</h1>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded"
        />
        {error && <p className="mb-4 text-red-500">{error}</p>}
        <button type="submit" className="w-full p-2 text-white bg-blue-500 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PasswordPage;