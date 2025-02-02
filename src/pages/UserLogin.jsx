import React, { useState, useContext } from 'react'
import { use } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/userContext'

const UserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState({});

    const { user, setUser } = useContext(UserDataContext);
    const navigate = useNavigate();


    const submitHandler = async (e) => {
        e.preventDefault();
        setUserData({
            email: email,
            password: password
        });

        console.log(userData);
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,userData);
        if(response.status===200)
        {
            const data= response.data;
            setUser(data.user)
            console.log(data.user)
            localStorage.setItem("token",data.token)
            navigate('/home')
            console.log("login successfully")
        }


        setEmail('');
        setPassword('');
    }
    return (
        <div className='p-7 flex flex-col justify-between items-center h-screen'>
            <div>
                <img className='w-24 pb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                <form onSubmit={(e) => submitHandler(e)}>
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
                    >Login</button>

                    <p className='text-center'>New here? <Link to='/signup' className='text-blue-500'>Create New Account</Link></p>
                </form>
            </div>
            <div>
                <Link to='/captain-login'
                    className='bg-[#10b461] flex justify-center text-white font-semibold mb-7 rounded px-16 py-2  w-full text-lg placeholder:text-base'
                >Signin as a Captain</Link>
            </div>
        </div>
    )
}

export default UserLogin