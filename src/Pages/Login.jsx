import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from "../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

 

const Login = () => {
    const {googleSignIn, passwordLogin} = useContext(AuthContext)
    const [passwordType, setPasswordType] = useState("password");  
    const [error , setError] = useState('')
    const navigate = useNavigate()
    const togglePassword = () =>{
        if(passwordType==="password")
        {
         setPasswordType("text")
         return;
        }
        setPasswordType("password")
      }

const handleGoogle = () =>{
    googleSignIn()
    .then(result => {
      const loggedUser = result.user
        console.log(loggedUser)
        const saveUser = {name: loggedUser.displayName, email: loggedUser.email } 
      fetch('https://assignment12-server-murex.vercel.app/users',{
          method: 'POST',
          headers: {
            'content-type': 'application/json'
        },
          body: JSON.stringify(saveUser)
        })
        .then(res => res.json())
        .then(data =>{
         if(data.insertedId){
          navigate('/')
          Swal.fire({
            icon: 'success',
            title: 'Login successfully',
            showConfirmButton: false,
            timer: 1500
          })
         }
        })
    })
    .catch(error => {
        console.log(error.message)
    })
}

const { register, handleSubmit,  } = useForm();
  const onSubmit = data => {
    console.log(data)
    passwordLogin(data.email, data.password)
    .then(result =>{
      console.log(result.user)
      navigate('/')
      Swal.fire({
        icon: 'success',
        title: 'Login Successfully',
        showConfirmButton: false,
        timer: 1500
      })
    })
    .catch(error => {
      console.log(error.message)
      setError(error.message)
    })
  };


    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col gap-36 lg:flex-row-reverse">
          <div className="text-center lg:text-left">
           <img className="h-80 w-96" src="https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-3875.jpg" alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body my-0">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input  {...register("email", { required: true })} type="text" name="email" placeholder="email" className="input input-bordered w-80" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input {...register("password", { required: true })} name="password" type={passwordType} placeholder="password" className="w-80 input input-bordered" />
                <p className="md:relative left-72 bottom-12 cursor-pointer " onClick={togglePassword}>
                     { passwordType==="password"? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash> }
                     </p>
              </div>
              <div className="form-control mt-3 w-80">
                <p className="text-red-500">{error}</p>
                <input className="btn text-white bg-gradient-to-r from-[#D14D72] to-[#fcc01e]" type="submit" value="Login" />
                
                <img className="cursor-pointer" onClick={handleGoogle}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT13IyGsqKYZ2OF8nlWcXFIePFkB4vG4FBSPOlKWGAJ4z77ciPmalopIpX_zvQy3hBMCQ&usqp=CAU" alt="" />
                <p>Are you New? <Link className="text-blue-400" to='/register'>Please Register</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;