import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function MyAccount() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">My Account</h2>
      <div className="card shadow p-4 mx-auto" style={{ maxWidth: '500px' }}>
        <h5>Email:</h5>
        <p>{currentUser ? currentUser.email : 'No user logged in'}</p>
        <h5>Account Type:</h5>
        <p>Customer</p>
      </div>
    </div>
  );
}

export default MyAccount;
