import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col gap-36 lg:flex-row-reverse">
          <div className="text-center lg:text-left">
           <img className="" src="https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-3875.jpg" alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" className="input input-bordered" />
              </div>
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
                <input type="text" placeholder="password" className="input input-bordered" />
            
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="text" placeholder="Confirm password" className="input input-bordered" />
            
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" placeholder="Photo URL" className="input input-bordered" />
            
              </div>
              <div className="form-control mt-6">
                <button className="btn text-white bg-gradient-to-r from-[#D14D72] to-[#fcc01e]">Register</button>
                
                <p>Already have an account ? <Link className="text-blue-400" to='/login'>Please login</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;