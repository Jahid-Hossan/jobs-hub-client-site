import { useContext } from 'react';
import { AuthContext } from '../Provider/Provider';

const useAuth = () => {
    const authHook = useContext(AuthContext)
    return authHook
};

export default useAuth;