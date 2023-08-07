// hooks/useAuthToken.js
import { useEffect, useState } from 'react';

const TokenHook = () => {
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setAuthToken(token);
  }, []);

  return authToken;
};

export default TokenHook;
