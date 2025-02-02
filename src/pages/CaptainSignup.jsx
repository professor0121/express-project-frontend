// import React, { useState } from 'react'
// import { use } from 'react'
// import { Link } from 'react-router-dom'

// const CaptainSignup = () => {
//   const [email, setEmail] = useState('');
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [password, setPassword] = useState('');
//   const [captainData, setCaptainData] = useState({});
//   const submitHandler = (e) => {
//     e.preventDefault();
//     setCaptainData({
//       fullName: {
//         firstName: firstName,
//         lastName: lastName
//       },
//       email: email,
//       password: password
//     });
//     console.log(captainData);
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
//             <h3 className='text-2xl mb-2'>Enter Captain Full Name</h3>
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

//           <p className='text-center'>I Have A Account <Link to='/captain-login' className='text-blue-500'>Login</Link></p>
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

// export default CaptainSignup




import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CapatainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainSignup = () => {

  const navigate = useNavigate()

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')

  const [ vehicleColor, setVehicleColor ] = useState('')
  const [ vehiclePlate, setVehiclePlate ] = useState('')
  const [ vehicleCapacity, setVehicleCapacity ] = useState('')
  const [ vehicleType, setVehicleType ] = useState('')


  const { captain, setCaptain } = React.useContext(CaptainDataContext)


  const submitHandler = async (e) => {
    e.preventDefault()
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

    if (response.status === 201) {
      const data = response.data
      setCaptain(data.captain)
      console.log(response.data)
      localStorage.setItem('token', data.token)
      navigate('/captain-home')

    }

    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')
    setVehicleColor('')
    setVehiclePlate('')
    setVehicleCapacity('')
    setVehicleType('')

  }
  return (
    <div className='py-5 px-5 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-20 mb-3' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />

        <form onSubmit={(e) => {
          submitHandler(e)
        }}>

          <h3 className='text-lg w-full  font-medium mb-2'>What's our Captain's name</h3>
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

          <h3 className='text-lg font-medium mb-2'>What's our Captain's email</h3>
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

          <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Color'
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value)
              }}
            />
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Plate'
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value)
              }}
            />
          </div>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="number"
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value)
              }}
            />
            <select
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value)
              }}
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>

          <button
            className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
          >Create Captain Account</button>

        </form>
        <p className='text-center'>Already have a account? <Link to='/captain-login' className='text-blue-600'>Login here</Link></p>
      </div>
      <div>
        <p className='text-[10px] mt-6 leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
          Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>
    </div>
  )
}

export default CaptainSignup