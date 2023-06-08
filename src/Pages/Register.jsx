import {   useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"

const Register = () => {
    const [passwordType, setPasswordType] = useState("password");  
    const [password2ndType, setPassword2ndType] = useState("password"); 
    const { register,getValues,   handleSubmit, formState: { errors }  } = useForm();
   
  const onSubmit = data => {

    console.log(data)
   
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
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
               

                <p className="md:relative left-72 bottom-8 cursor-pointer " onClick={togglePassword}>
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
               
                <p className="md:relative left-72 bottom-8 cursor-pointer " onClick={toggle2ndPassword}>
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