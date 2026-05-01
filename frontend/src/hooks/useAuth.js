import { useAuthContext } from '../contexts/AuthContext';

/**
 * useAuth — convenience hook for accessing auth context.
 * Usage: const { user, login, logout } = useAuth();
 */
const useAuth = () => {
  return useAuthContext();
};

export default useAuth;
