import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import useInstractor from "../../Hooks/useInstractor";


const Dashboard = () => {
   const [isAdmin] = useAdmin()
    const [isInstractor] = useInstractor()
    console.log(isInstractor)
    return (
        <div>

{isAdmin ? (
        <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
       
          <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            <li><Link to='/dashboard/allusers'className="font-bold bg-gradient-to-r from-[#D14D72] to-[#fcc01e] inline-block text-transparent bg-clip-text">All Users</Link></li>
            <li><Link className="font-bold bg-gradient-to-r from-[#D14D72] to-[#fcc01e] inline-block text-transparent bg-clip-text">Manage Class</Link></li>
            <div className="divider"></div>
            <li className="font-bold bg-gradient-to-r from-[#D14D72] to-[#fcc01e] inline-block text-transparent bg-clip-text"><Link to='/'>Home</Link></li>
          </ul>
         
        </div>
      </div>
      ) : isInstractor ? (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            <li className="font-bold bg-gradient-to-r from-[#D14D72] to-[#fcc01e] inline-block text-transparent bg-clip-text"><Link to='/dashboard/addClass'>Add Class</Link></li>
            <li className="font-bold bg-gradient-to-r from-[#D14D72] to-[#fcc01e] inline-block text-transparent bg-clip-text"><Link to='/dashboard/myclass'>My Class</Link></li>
            <div className="divider"></div>
            <li className="font-bold bg-gradient-to-r from-[#D14D72] to-[#fcc01e] inline-block text-transparent bg-clip-text"><Link to='/'>Home</Link></li>
          </ul>
        
        </div>
      </div>
      ) : (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            <li className="font-bold bg-gradient-to-r from-[#D14D72] to-[#fcc01e] inline-block text-transparent bg-clip-text"><Link>My Selected Class</Link></li>
            <li className="font-bold bg-gradient-to-r from-[#D14D72] to-[#fcc01e] inline-block text-transparent bg-clip-text"><Link to='/dashboard/myclass'>My Enrolled Class</Link></li>
            <div className="divider"></div>
            <li className="font-bold bg-gradient-to-r from-[#D14D72] to-[#fcc01e] inline-block text-transparent bg-clip-text"><Link to='/'>Home</Link></li>
          </ul>
        
        </div>
      </div>
      )}


</div>
    );
};

export default Dashboard;