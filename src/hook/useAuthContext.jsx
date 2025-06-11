import React, { use } from 'react';
import { AuthContext } from '../Contexts/AuthContext/AuthContext';

const useAuthContext = () => {

    const authInfo = use(AuthContext);

    return authInfo
};

export default useAuthContext;