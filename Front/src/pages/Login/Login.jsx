// import { useEffect, useState } from 'react';
// // import DefaultLayout from '../Layouts/DefaultLayout';
// // import { useAuth } from '../Auth/AuthProvider';
// import { Navigate, useNavigate } from 'react-router-dom';
// // import { API_URL } from '../Auth/constants';

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorResponse, setErrorResponse] = useState('');

//   // const auth = useAuth();
//   const goTo = useNavigate();

//   useEffect(() => {
//     localStorage.removeItem('user');
//   }, []);

//   function handleChange(e) {
//     const { name, value } = e.target;
//     if (name === 'email') {
//       setEmail(value);
//     }
//     if (name === 'password') {
//       setPassword(value);
//     }
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setErrorResponse('');

//     try {
//       const response = await fetch(`${API_URL}/login`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       });

//       if (response.ok) {
//         const json = await response.json();
//         const { accessToken, user } = json;

//         auth.saveUser(user);
//         auth.saveToken(accessToken);

//         goTo('/home');
//       } else {
//         const json = await response.json();
//         setErrorResponse(json.error);
//         return;
//       }
//     } catch (error) {
//       setErrorResponse('Invalid email or password');
//     }
//   }

//   if (auth.isAuthenticated) {
//     return <Navigate to='/home' />;
//   }

//   return (
//     <div>
//       <h1>Inicia sesión</h1>
//       <form
//         onSubmit={handleSubmit}
//         className='p-4 flex flex-col items-center gap-6 border rounded-lg backdrop-blur-sm'
//       >
//         <p>
//           Correo Electrónico
//           <span className='font-sans text-red-800 text-text'>*</span>
//         </p>
//         <div className='flex flex-col w-full'>
//           <label className='ml-5 py-1 items-center text-gray-600 font-medium text-sm transition-all duration-200 ease-in-out'>
//             Email
//           </label>
//           <input
//             className='bg-transparent px-5 py-3 w-full border border-neutral-300 focus:border-neutral-400 rounded-xl outline-none text-sm text-black font-normal'
//             placeholder='Enter your email'
//             name='email'
//             type='text'
//             value={email}
//             onChange={handleChange}
//           />
//         </div>
//         <div className='flex flex-col w-full mb-3'>
//           <label className='ml-5 py-1 items-center text-gray-600 font-medium text-sm transition-all duration-200 ease-in-out'>
//             Password
//           </label>
//           <input
//             className='bg-transparent px-5 py-3 w-full border border-neutral-300 focus:border-neutral-400 rounded-xl outline-none text-sm text-black font-normal'
//             placeholder='Enter your password'
//             type='password'
//             value={password}
//             name='password'
//             onChange={handleChange}
//           />
//         </div>
//         <button className='primaryBtn'>Iniciar Sesión</button>
//         {!!errorResponse && (
//           <div className='text-center text-xs text-red-500 font-medium'>
//             {errorResponse}
//           </div>
//         )}
//       </form>
//     </div>
//   );
// }

import { Link } from "react-router-dom"
const Login = () => {
  return (
    <div>Login 
      <div>
        <Link to={'/'}>Vamos para el inicio</Link>
      </div>
    </div>

  )
}

export default Login