import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
    return (
        <div>
            <div className='h-screen bg-[url(https://img.freepik.com/free-photo/traffic-light-background-tall-building_23-2148184307.jpg?semt=ais_hybrid)] bg-cover pt-8 w-full flex bg-red-400 justify-between flex-col'>
                <img className='w-24 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                <div className='bg-white pb-8 py-4 px-4'>
                    <h2 className='text-3xl font-bold'>Get Started With Uber</h2>
                    <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
                </div>
            </div>
        </div>
    )
}

export default Start