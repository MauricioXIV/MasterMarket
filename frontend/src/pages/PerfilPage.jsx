import { useEffect, useState } from 'react';
import { getUser } from '../api/login.api';
import { useNavigate } from 'react-router-dom'

const PerfilPage = () => {
  const [userData, setUserData] = useState({
    first_name: 'Juan',
    last_name: 'Pérez García',
    email: 'juan.perez@example.com',
    coins: Math.floor(Math.random() * 1000),
    image: 'https://randomuser.me/api/portraits/men/75.jpg'
  });

  const navigate = useNavigate()

  useEffect(() => {
    async function solicitarPerfil() {
      const res = await getUser()
      console.log(res.data)
      setUserData(res.data)
    }
    solicitarPerfil()
  }, [])

  return (
    <div className="max-w-md mx-auto my-8 p-8 pt-4 rounded-xl shadow-md bg-white font-sans">
      <div className='text-center m-0 text-2xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200'>Mi perfil</div>
      <div className="flex items-center mb-6">
        <img 
          src={`http://127.0.0.1:8000${userData.image}`} 
          alt="User avatar" 
          className="w-20 h-20 rounded-full object-cover mr-6 border-[3px] border-gray-100"
        />
        <h2 className="m-0 text-2xl font-semibold text-gray-800">
          {userData.first_name} {userData.last_name}
        </h2>
      </div>
      
      <div className="mt-6">
        <div className="mb-4 pb-4 border-b border-gray-200">
          <span className="font-bold text-gray-600 mr-2">Email:</span>
          <span className="text-gray-800">{userData.email}</span>
        </div>
        
        <div className="mb-4 pb-4 border-b border-gray-200">
          <span className="font-bold text-gray-600 mr-2">MP Coins:</span>
          <span className="text-amber-600 font-bold">{userData.coins}</span>
        </div>
        <button
          onClick={() => navigate('/login/perfil/editar')}
          className="w-full mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Editar Perfil
        </button>
      </div>

      
    </div>
  );
};

export default PerfilPage;