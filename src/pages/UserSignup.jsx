// import React, { useState } from 'react'
// import { use } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import {UserDataContext} from '../context/userContext'

// const UseSignup = () => {
//   const [email, setEmail] = useState('');
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [password, setPassword] = useState('');
//   const [userData, setUserData] = useState({});

//   const navigate = useNavigate();
//   const {user,setUser}=React.useContext(UserDataContext)



//   const submitHandler = async (e) => {

//     e.preventDefault();
//     const newUser = {
//       fullName: {
//         firstname: firstName,
//         lastname: lastName
//       },
//       email: email,
//       password: password
//     };
// console.log(newUser)
//     const reponse = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);
//     if(reponse===201){
//       const data=reponse.data
//       setUser(data.user)
//     }

//     setFirstName('');
//     setLastName('');
//     setEmail('');
//     setPassword('');
//   }
//   return (
//     <div className='p-7 flex flex-col justify-between items-center h-screen'>
//       <div>
//         <img className='w-24 pb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
//         <form onSubmit={(e) => submitHandler(e)}>
//           <div>
//             <h3 className='text-2xl mb-2'>Enter Your Name</h3>
//             <div className='flex gap-2'>
//               <input
//                 value={firstName}
//                 onChange={(e) => setFirstName(e.target.value)}
//                 required
//                 className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
//                 type="text" placeholder='First Name' />
//               <input
//                 value={lastName}
//                 onChange={(e) => setLastName(e.target.value)}
//                 className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
//                 type="text" placeholder='Last Name' />
//             </div>
//           </div>
//           <h3 className='text-2xl mb-2'>What's your e-mail</h3>
//           <input
//             className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             type="email"
//             placeholder='email@example.com' />
//           <h3 className='text-2xl mb-2'>Enter Password</h3>
//           <input
//             className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             type="password"
//             placeholder='password' />
//           <button
//             className='bg-[#111111] text-white font-semibold mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base'
//           >Register</button>

//           <p className='text-center'>I Have A Account <Link to='/login' className='text-blue-500'>Login</Link></p>
//         </form>
//       </div>
//       <div>
//         {/* <Link to='/captain-signup'
//           className='bg-[#10b461] flex justify-center text-white font-semibold mb-7 rounded px-16 py-2  w-full text-lg placeholder:text-base'
//         >Signup as a Captain</Link> */}
//         <p className='text-sm'>Welcome to    This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website [yourwebsite.com].</p>
//       </div>
//     </div>
//   )
// }

// export default UseSignup



import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/userContext'



const UserSignup = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')
  const [ userData, setUserData ] = useState({})

  const navigate = useNavigate()



  const { user, setUser } = useContext(UserDataContext)




  const submitHandler = async (e) => {
    e.preventDefault()
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password
    }
   console.log(newUser)
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

    if (response.status === 201) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }


    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')

  }
  return (
    <div>
      <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
          <img className='w-16 mb-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s" alt="" />

          <form onSubmit={(e) => {
            submitHandler(e)
          }}>

            <h3 className='text-lg w-1/2  font-medium mb-2'>What's your name</h3>
            <div className='flex gap-4 mb-7'>
              <input
                required
                className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border  text-lg placeholder:text-base'
                type="text"
                placeholder='First name'
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value)
                }}
              />
              <input
                required
                className='bg-[#eeeeee] w-1/2  rounded-lg px-4 py-2 border  text-lg placeholder:text-base'
                type="text"
                placeholder='Last name'
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value)
                }}
              />
            </div>

            <h3 className='text-lg font-medium mb-2'>What's your email</h3>
            <input
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
              type="email"
              placeholder='email@example.com'
            />

            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

            <input
              className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              required type="password"
              placeholder='password'
            />

            <button
              className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
            >Create account</button>

          </form>
          <p className='text-center'>Already have a account? <Link to='/login' className='text-blue-600'>Login here</Link></p>
        </div>
        <div>
          <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
            Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
        </div>
      </div>
    </div >
  )
}

export default UserSignup