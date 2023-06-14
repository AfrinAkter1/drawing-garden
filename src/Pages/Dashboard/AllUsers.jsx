
import { FaChalkboardTeacher,  FaUserShield } from "react-icons/fa";
import UseAllUsers from "../../Hooks/UseAllUsers";
import Swal from "sweetalert2";
const AllUsers = () => {
    

     const [ users ,refetch] = UseAllUsers() 
    //  console.log(users)

    // fetch('https://assignment12-server-murex.vercel.app/users')
    // .then(res => res.json())
    // .then(data => {
    //     console.log(data)
    // })
       
    const handleMakeAdmin = users =>{
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


//  Naziya Sultana Mithila
// import { useQuery } from '@tanstack/react-query';
// import React from 'react';
// import { FaTrash } from 'react-icons/fa';
// import Swal from 'sweetalert2';

// const ManageUsers = () => {
// const {data:users=[], refetch} = useQuery(['users'], async()=>{
// const res = await fetch('https://assignment12-server-murex.vercel.app/users')
// return res.json();
// })
// console.log(users);
// const handleDelete = (user) =>{
// console.log(user._id);
// Swal.fire({
//       title: 'Are you sure?',
//       text: "You won't be able to revert this!",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, delete it!'
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(https://assignment12-server-murex.vercel.app/users/${user._id}, {
//           method: 'DELETE'
//         })
//           .then(res => res.json())
//           .then(data => {
//             console.log(data);
//             if (data.deletedCount > 0) {
//               refetch();
//               Swal.fire(
//                 'Deleted!',
//                 'Your file has been deleted.',
//                 'success'
//               )

//             }
//           })

//       }
//     })

// } 

// const handleMakeAdmin = (user) =>{
// fetch(https://assignment12-server-murex.vercel.app/users/admin/${user._id},{
// method:"PATCH"
// })
// .then(res=>res.json())
// .then(data=>{
// console.log(data);
// if(data?.modifiedCount){
// refetch();
// Swal.fire({
//   position: 'top-end',
//   icon: 'success',
//   title: ${user.name} is an Admin Now,
//   showConfirmButton: false,
//   timer: 1500
// })
// }
// })
// }

// const handleMakeInstructor = (user) =>{
// fetch(https://assignment12-server-murex.vercel.app/users/instructor/${user._id},{
// method:"PATCH"
// })
// .then(res=>res.json())
// .then(data=>{
// console.log(data);
// if(data?.modifiedCount){
// refetch();
// Swal.fire({
//   position: 'top-end',
//   icon: 'success',
//   title: ${user.name} is an instructor now,
//   showConfirmButton: false,
//   timer: 1500
// })
// }
// })
// }
//   return (
//     <div>
//       <h2>Total Users: {users.length} </h2>
// <div className="overflow-x-auto">
//   <table className="table table-zebra">
//     {/* head */}
//     <thead>
//       <tr className='text-lg'>
//         <th>#</th>
//         <th>Name</th>
//         <th>Email</th>
//         <th>Role</th>
//         <th>Make Instructor</th>
//         <th>Action</th>
//       </tr>
//     </thead>
//     <tbody>
//    {
// users?.map((user,index)=> <tr key={user._id} >
//         <th>{index + 1}</th>
//         <td>{user?.name}</td>
//         <td>{user?.email}</td>
//         <td>{user.role === 'admin' ? <button className='btn btn-primary btn-sm'> admin </button>: <><button onClick={()=> handleMakeAdmin(user)}  className='btn btn-primary btn-sm'>Make Admin</button></>}</td>
//         <td>{user.role === 'instructor'? <button className='btn btn-primary btn-sm'> instructor </button>: <><button onClick={()=> handleMakeInstructor(user)}  className='btn btn-primary btn-sm'>Make Instructor</button></> }</td>
      
//         <td>  <button onClick={() => handleDelete(user)} className=" btn btn-ghost btn-md text-white hover:text-red-500  bg-red-500"> <FaTrash className='w-6 h-6'></FaTrash> </button> </td>
//       </tr>)
// }
     
//     </tbody>
//   </table>
// </div>
//     </div>
//   );
// };

// export default ManageUsers;