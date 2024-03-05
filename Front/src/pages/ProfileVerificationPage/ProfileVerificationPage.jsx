import { useEffect, useState } from 'react';
import {  Navigate } from 'react-router-dom';
import providerStore from '../../store/dataProv';
import useUserStore from '../../store/auth';

const ProfileVerificationPage = () => {
  const { id } = useUserStore();
  const { loadprovider } = providerStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyProfile = async () => {
      if (id) {
        await loadprovider(id);
        setLoading(false);
      }
    };

    verifyProfile();
  }, [id, loadprovider]);

  if (loading) {
    return <p>Verificando perfil...</p>;
  }

  return <Navigate to='/providers/completar-perfil' />;
};

export default ProfileVerificationPage;
