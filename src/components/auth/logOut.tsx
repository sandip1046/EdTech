
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

const Logout = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogout = () => {
    signOut(auth).then(() => {
      
      navigate('/signin'); // Redirect to the login page
    }).catch((error) => {
      console.error('Error logging out:', error);
    });
  };

  return (
    <button onClick={handleLogout} className={"flex justify-center flex-col font-semibold text-xl mx-2 hover:text-slate-500"}>Logout</button>
  );
};

export default Logout;
