
import { FaChalkboardTeacher,  FaTrash,  FaUserShield } from "react-icons/fa";
import UseAllUsers from "../../Hooks/UseAllUsers";
import Swal from "sweetalert2";
import { useState } from "react";
const AllUsers = () => {
  const [instractorDisable, setInstractorDisable] = useState(false)
  const [adminDisable, setAdminDisable] = useState(false)

 const handleClickAdmin = () =>{
    setInstractorDisable(true)
  
  }
 const handleClickIns = () =>{
         setAdminDisable(true)
  }
  
     const [ users ,refetch] = UseAllUsers() 
    const handleDelete =(user) =>{
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://assignment12-server-murex.vercel.app/users/${user._id}`,{
            method: 'DELETE'
          })
          .then(res => res.json())
          .then(data =>{
            if(data.deletedCount > 0){
              refetch()
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
         
        }
      })
    }
       
    const handleMakeAdmin = users =>{
      handleClickAdmin()
        fetch(`https://assignment12-server-murex.vercel.app/users/admin/${users._id}`,{
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
      
      handleClickIns()
       fetch(`https://assignment12-server-murex.vercel.app/users/instractor/${user._id}`,{
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
        <th>Delete</th>
      </tr>
    </thead> 
    <tbody>
       {
        users.map((user, index)=><tr key={user._id}>
        <th>{index + 1}</th> 
        <td>{user.name}</td> 
        <td>{user.email}</td> 
        <td>
        {user.role === 'admin' ? 'admin': <button disabled={adminDisable} onClick={() => handleMakeAdmin(user)} className="btn  btn-sm bg-gradient-to-r from-[#D14D72] to-[#fcc01e]  text-white"><FaUserShield></FaUserShield></button>}
        </td> 
         
        
        <td>{user.role2 === 'instractor' ? 'instractor': <button disabled={instractorDisable} onClick={() => handleMakeInstractor(user)} className="btn btn-sm bg-gradient-to-r from-[#D14D72] to-[#fcc01e]  text-white "><FaChalkboardTeacher></FaChalkboardTeacher></button>} </td>
        <td><button onClick={() => handleDelete(user)} className="btn btn-sm bg-gradient-to-r from-[#D14D72] to-[#fcc01e]  text-white"><FaTrash></FaTrash></button></td>
      </tr>)
       }
     </tbody> 
 
   </table>
 </div>
       </div>
    );
 };

 export default AllUsers;

