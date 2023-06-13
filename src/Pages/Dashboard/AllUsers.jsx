
import { FaChalkboardTeacher,  FaUserShield } from "react-icons/fa";
import UseAllUsers from "../../Hooks/UseAllUsers";
import Swal from "sweetalert2";
const AllUsers = () => {
    

     const [ users ,refetch] = UseAllUsers() 
     console.log(users)

    // fetch('http://localhost:5000/users')
    // .then(res => res.json())
    // .then(data => {
    //     console.log(data)
    // })
       
    const handleMakeAdmin = users =>{
        fetch(`http://localhost:5000/users/admin/${users._id}`,{
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    icon: 'success',
                    title: `${users.name} is an admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    const handleMakeInstractor =(user) =>{
      

       fetch(`http://localhost:5000/users/instractor/${user._id}`,{
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    icon: 'success',
                    title: `${user.name} is an instractor Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })

    }
    
    return (
        <div className=" w-full">
            <h3 className="my-5 text-center font-bold  bg-gradient-to-r from-[#D14D72] to-[#fcc01e]  text-transparent bg-clip-text">All Users {users?.length}</h3>
            <div className="overflow-x-auto">
  <table className="table table-xs table-pin-rows table-pin-cols">
    <thead>
      <tr>
        <th>#</th> 
        <th>Name</th> 
        <th>Email</th> 
        <th>Role</th> 
        <th>Role2</th> 
      </tr>
    </thead> 
    <tbody>
       {
        users.map((user, index)=><tr key={user._id}>
        <th>{index + 1}</th> 
        <td>{user.name}</td> 
        <td>{user.email}</td> 
        <td>
        {user.role === 'admin' ? 'admin': <button onClick={() => handleMakeAdmin(user)} className="btn  btn-sm bg-gradient-to-r from-[#D14D72] to-[#fcc01e]  text-white"><FaUserShield></FaUserShield></button>}
        </td> 
         
        
        <td>{user.role2 === 'instractor' ? 'instractor': <button onClick={() => handleMakeInstractor(user)} className="btn btn-sm bg-gradient-to-r from-[#D14D72] to-[#fcc01e]  text-white "><FaChalkboardTeacher></FaChalkboardTeacher></button>} </td>
      </tr>)
       }
     </tbody> 
 
   </table>
 </div>
       </div>
    );
 };

 export default AllUsers;