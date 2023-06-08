import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Navbar = () => {
    const navbar = <>
    <li className= "font-bold bg-gradient-to-r from-[#D14D72] to-[#fcc01e] inline-block text-transparent bg-clip-text"><Link>Home</Link></li>
    <li className="font-bold bg-gradient-to-r from-[#D14D72] to-[#fcc01e] inline-block text-transparent bg-clip-text"><Link>Instractor</Link></li>
    <li className="font-bold bg-gradient-to-r from-[#D14D72] to-[#fcc01e] inline-block text-transparent bg-clip-text"><Link>Class</Link></li>
    <li className="font-bold bg-gradient-to-r from-[#D14D72] to-[#fcc01e] inline-block text-transparent bg-clip-text"><Link>Dashboard</Link></li>
    </>
    return (
        <div data-aos="fade-down"data-aos-duration="2000" >
            <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {
        navbar
       }
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-2xl bg-gradient-to-r from-[#D14D72] to-[#fcc01e] inline-block text-transparent bg-clip-text"><i>Drawing garden</i></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navbar}
    </ul>
  </div>
  <div className="navbar-end">
    <Link to='/login' className="btn text-white bg-gradient-to-r from-[#D14D72] to-[#fcc01e]">Login</Link>
  </div>
</div>
        </div>
    );
};

export default Navbar;