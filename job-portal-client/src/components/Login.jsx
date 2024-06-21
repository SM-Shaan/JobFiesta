// // // import React from "react";


// // // const Login = () => {

// // //     return (
// // //         <div className="h-screen w-full flex items-center justify-center">
// // //             
// // //         </div>
// // //     );
// // // };

// // // export default Login;



// // import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"
// // import React from 'react'
// // import { useForm } from 'react-hook-form'
// // import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa6'
// // import { Link } from 'react-router-dom'

// // const Login = () => {
// //     const googleProvider = new GoogleAuthProvider();
// //     const auth = getAuth();
// //     const handleLogin = () => {
// //         signInWithPopup(auth, googleProvider)
// //             .then((result) => {
// //                 const user = result.user;
// //             })
// //             .catch((error) => {
// //                 const errorMessage = error.message;
// //                 // The email of the user's account used. 
// //                 const email = error.customData.email;
// //                 // The AuthCredential type that was used.
// //                 const credential = GoogleAuthProvider.credentialFromError(error);
// //                 // ...
// //             });
// //     };
// //     const {
// //         register,
// //         handleSubmit,
// //         formState: { errors },
// //     } = useForm()
// //     const onSubmit = (data) => console.log(data)
// //     return (
// //         <div>
// //             <dialog
// //                 id="my_modal_5"
// //                 className='modalmodal-bottom sm:modal-middle '
// //             >
// //                 <div className='max-w-md bg-white shadow w-full mx-auto flex items-center justify-center' >
// //                     <div className='modal-action flex flex-col justify-center mt-0 '>
// //                         <form onSubmit={handleSubmit(onsubmit)} className='card-body' method='dialog'>
// //                             <h3 className='font-bold text-xl text-blue text-center underline'>Login Here</h3>
// //                             <div className='form-control mt-4'>
// //                                 <label className='label'>
// //                                     <span className='label-text'>Email</span>
// //                                 </label>
// //                                 <input type='email' placeholder='email' className='input input-bordered px-3 py-2 border w-96 flex rounded mb-2 mt-2   ' {...register("email")} />
// //                             </div>

// //                             <div className='form-control'>
// //                                 <label className='label'>
// //                                     <span className='label-text'>Password</span>
// //                                 </label>
// //                                 <input type='password' placeholder='password' className='input input-bordered px-3 py-2 border w-96 flex rounded mb-3 mt-2 ' {...register("password")} />
// //                                 <label className='label mt-1'>
// //                                     <a href='#' className='label-text-alt link link-hover hover:underline text-sm ml-70'>Forget Password?</a>
// //                                 </label>
// //                             </div>
// //                             <div className='form-control mt-6'>
// //                                 <input type='submit' value="Login" className='btn bg-blue py-2 px-10 ml- text-white font-bold rounded ' />
// //                             </div>
// //                             <p className='text-center my-2'>Don't have an account? <Link to="/Signup" className='underline text-blue ml-1'>Signup Now</Link></p>
// //                         </form>
// //                         <div className='text-center space-x-3 mb-5'>
// //                             {/* <button className='btn e'> */}
// //                             <button className="btn-circle hover:bg-green hover:text-blu" onClick={handleLogin}>
// //                                 {/* //                 Login */}
// //                                 {/* //             </button> */}
// //                                 <FaGoogle />
// //                             </button>
// //                             <button className='btn btn-circle hover:bg-green hover:text-blue'>
// //                                 <FaFacebookF />
// //                             </button>
// //                             <button className='btn  btn-circle hover:bg-green hover:text-blue'>
// //                                 <FaGithub />
// //                             </button>
// //                         </div>
// //                     </div>
// //                 </div>

// //             </dialog>
// //         </div>
// //     )
// // }

// // export default Login
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login()
// {
//     const [values, setValues] =useState({

//         email:  '',
//         password: ''
//     })
//     const navigate = useNavigate();
//     const handleInput =(event)=>{
//         setValues(prev=> ({
//             ...prev, [event.target.name] : [event.target.value]}))
//         }
//         // const handleSubmit=async(event)=>{
//         //     event.preventDefault();
//         }
//     axios.defaults.withCredentials=true;
//     useEffect(() => {
//      axios.get('http://')
//      .then(res=>{
//         if(res.data.valid){
//             navigate('/');
//         }
//         else{
//             navigate('login')
//         }
//      })
//      .catch(err=>console.log(err))
//     },[])
    
  
//     }
// }