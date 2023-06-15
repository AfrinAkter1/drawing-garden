import {   useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const {passwordRegister, updateUserProfile} = useContext(AuthContext)
  const [error, setError] = useState('')
    const [passwordType, setPasswordType] = useState("password");  
    const [password2ndType, setPassword2ndType] = useState("password"); 
    const { register,getValues,   handleSubmit, formState: { errors }  } = useForm();
   const navigate = useNavigate()
  const onSubmit = data => {

    console.log(data)
    passwordRegister(data.email,data.password)
    .then(result =>{
      const user = result.user;
      console.log(user)
  
      navigate('/')
      updateUserProfile(data.name, data.photourl)
      .then(()=>{
      const saveUser = {name: data.name, email: data.email, image: data.photourl } 
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
          Swal.fire({
            icon: 'success',
            title: 'register successfully',
            showConfirmButton: false,
            timer: 1500
          })
         }
        })
      })
      .catch(error =>{
        console.log(error.message)
    
      })
    })
    .catch(error => {
      console.log(error)
      setError(error.message)
    })
   
};
 

    const togglePassword = () =>{
        if(passwordType==="password")
        {
         setPasswordType("text")
         return;
        }
        setPasswordType("password")
      }


    const toggle2ndPassword = () =>{
        if(password2ndType==="password")
        {
         setPassword2ndType("text")
         return;
        }
        setPassword2ndType("password")
      }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col gap-36 lg:flex-row-reverse">
          <div className="text-center lg:text-left">
           <img className="" src="https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-3875.jpg" alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body w-96 mt-0">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input {...register("name")
                
            } name="name" type="text" placeholder="Name" className="input input-bordered" 
                />
                
               
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input {...register("email")} name="email" type="text" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input {...register("password",
                {
                    required: true,
                    minLength: 6,
                    pattern: /(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/
                  }
                )} name="password" type={passwordType} placeholder="password" className="input input-bordered" />
               

                <p className="md:relative left-72 bottom-12 cursor-pointer " onClick={togglePassword}>
                     { passwordType==="password"? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash> }
                     </p>
            
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input 
                {...register('confirm', {
                    validate: (value) =>
                      value === getValues('password') || 'Passwords do not match',
                  })}
                name="confirm" type={password2ndType} placeholder="Confirm password" className="input input-bordered" />
               
                <p className="md:relative left-72 bottom-12 cursor-pointer " onClick={toggle2ndPassword}>
                     { password2ndType==="password"? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash> }
                     </p>
            
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input {...register("photourl")} name="photourl" type="text" placeholder="Photo URL" className="input input-bordered" />
            
              </div>
              <div className="form-control mt-6">
{/* errors */}

{errors?.password?.type === "required" && <p className="text-red-500">This field is required</p>}
      {errors?.password?.type === "minLength" && (
        <p className="text-red-500">Password at least 6 characters</p>
      )}
      {errors?.password?.type === "pattern" && (
        <p className="text-red-500">Password have at least one Special, at least one  Alphabetical characters and one number</p>
      )}

{errors.confirm && <p className="text-red-500">{errors.confirm.message}</p>}

<p className="text-red-500">{error}</p>



                <input className="btn text-white bg-gradient-to-r from-[#D14D72] to-[#fcc01e]" type="submit" value="Register" />
                
                
                <p>Already have an account ? <Link className="text-blue-400" to='/login'>Please login</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;