import React, { useState } from 'react'
import { use } from 'react'
import { Link } from 'react-router-dom'

const UseSignup = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({ firstName: firstName, lastName: lastName, email: email, password: password });
    console.log(userData);
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');  
  }
  return (
    <div className='p-7 flex flex-col justify-between items-center h-screen'>
      <div>
        <img className='w-24 pb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <form onSubmit={(e) => submitHandler(e)}>
          <div>
            <h3 className='text-2xl mb-2'>Enter Your Name</h3>
            <div className='flex gap-2'>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                type="text" placeholder='First Name' />
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                type="text" placeholder='Last Name' />
            </div>
          </div>
          <h3 className='text-2xl mb-2'>What's your e-mail</h3>
          <input
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            placeholder='email@example.com' />
          <h3 className='text-2xl mb-2'>Enter Password</h3>
          <input
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder='password' />
          <button
            className='bg-[#111111] text-white font-semibold mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base'
          >Register</button>

          <p className='text-center'>I Have A Account <Link to='/login' className='text-blue-500'>Sign in</Link></p>
        </form>
      </div>
      <div>
        <Link to='/captain-signup'
          className='bg-[#10b461] flex justify-center text-white font-semibold mb-7 rounded px-16 py-2  w-full text-lg placeholder:text-base'
        >Signup as a Captain</Link>
      </div>
    </div>
  )
}

export default UseSignup