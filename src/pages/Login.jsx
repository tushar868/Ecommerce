import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'; 
import { auth, googleProvider } from '../firebase/firebase'; 
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc'; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/');
    } catch (err) {
      setError('Google Sign-In failed');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Login</h2>
      <form onSubmit={handleLogin} className="mx-auto" style={{ maxWidth: '400px' }}>
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn-custom w-100">Login</button>

        <p className="text-center mt-3">
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </form>

      
      <div className="text-center mt-4">
        <button className="btn-custom w-30" onClick={handleGoogleLogin}>
        <FcGoogle size={20} className="me-2" /> Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
