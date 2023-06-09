import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from "../Providers/AuthProvider";

 

const Login = () => {
    const {googleSignIn} = useContext(AuthContext)
    const [passwordType, setPasswordType] = useState("password");  
    
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
        console.log(result.user)
    })
    .catch(error => {
        console.log(error.message)
    })
}

const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);


    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col gap-36 lg:flex-row-reverse">
          <div className="text-center lg:text-left">
           <img className="h-80 w-96" src="https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-3875.jpg" alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type={passwordType} placeholder="password" className="input input-bordered" />
                <p className="md:relative left-72 bottom-8 cursor-pointer " onClick={togglePassword}>
                     { passwordType==="password"? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash> }
                     </p>
              </div>
              <div className="form-control mt-6">
                <button className="btn text-white bg-gradient-to-r from-[#D14D72] to-[#fcc01e]">Login</button>
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