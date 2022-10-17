import { useContext } from 'react';
import { AuthContext } from '../_context/AuthProvider';

const getApi = () => {
  return useContext(AuthContext);
};
export default getApi;
