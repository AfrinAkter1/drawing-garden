import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
// ..
AOS.init();

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext)


  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')
    const handleToggle = (e) => {
      if (e.target.checked) {
        setTheme('dark')
      }
      else {
        setTheme('light')
      }
    }
    useEffect(() => {
      localStorage.setItem('theme', theme)
      const localTheme = localStorage.getItem('theme');
      document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme,])



  const handleLogout = () =>{
    logOut()
    .then()
    .catch(err =>{
      console.log(err.message)
    })
  }
    const navbar = <>
    <li className= "font-bold bg-gradient-to-r from-[#D14D72] to-[#fcc01e] inline-block text-transparent bg-clip-text"><Link>Home</Link></li>
    <li className="font-bold bg-gradient-to-r from-[#D14D72] to-[#fcc01e] inline-block text-transparent bg-clip-text"><Link to='/instractors'>Instractor</Link></li>
    <li className="font-bold bg-gradient-to-r from-[#D14D72] to-[#fcc01e] inline-block text-transparent bg-clip-text"><Link to='/allClasses'>Class</Link></li>
   {user && <li className="font-bold bg-gradient-to-r from-[#D14D72] to-[#fcc01e] inline-block text-transparent bg-clip-text"><Link to='/dashboard'>Dashboard</Link></li>}
{/* dark light  */}
          <li className="-mt-6">
          <div className=' bottom-4- gap-x-3  top-0'> 
           <label className="swap swap-rotate absolute top-0 ">
             {/* this hidden checkbox controls the state */}
            <input className='w-10 h-9 border-0 rounded-full' checked={theme === 'light' ? false : true} onChange={handleToggle} type="checkbox" />

             {/* sun icon */}
    <svg className="swap-on fill-current w-10 h-11" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

            {/* moon icon */}
            <svg className="swap-off fill-current w-10 h-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
        </label>       

</div>

          </li>





    </>
    return (
        <div data-aos="fade-down"data-aos-duration="2000" >
            <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 z-10 bg-base-300 rounded-box w-52">
       {
        navbar
       }
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-2xl bg-gradient-to-r from-[#D14D72] to-[#fcc01e] inline-block text-transparent bg-clip-text"><i>Drawing garden</i></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {
     navbar
     }
    </ul>
  </div>
  <div className="navbar-end">
   { user? <>
   
   <img className="h-10 w-10 rounded-full mx-3" src={user.photoURL} alt="" />
   <button onClick={handleLogout} className="btn text-white bg-gradient-to-r from-[#D14D72] to-[#fcc01e]">LogOut</button>
   </>
   :<Link to='/login' className="btn text-white bg-gradient-to-r from-[#D14D72] to-[#fcc01e]">Login</Link>}
  </div>
</div>
        </div>
    );
};

export default Navbar;

