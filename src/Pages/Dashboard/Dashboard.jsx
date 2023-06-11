import { Link, Outlet } from "react-router-dom";


const Dashboard = () => {
    // TODO
    const admin = true;
    const instructor = false;
    return (
        <div>

{admin ? (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
       
          <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            <li><Link>All Users</Link></li>
            <li><Link>Manage Class</Link></li>
          </ul>
        
        </div>
      </div>
      ) : instructor ? (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            <li><Link>Add Class</Link></li>
            <li><Link to='/dashboard/myclass'>Manage Class</Link></li>
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
            <li><Link>My Selected Class</Link></li>
            <li><Link to='/dashboard/myclass'>My Enrolled Class</Link></li>
          </ul>
        
        </div>
      </div>
      )}
</div>
    );
};

export default Dashboard;