import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
// import MyClassCard from './MyClassCard';
import { FaTrash } from 'react-icons/fa';
const MyClass = () => {
  const { loading, user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: myAllClass = [], error,refetch } = useQuery({
    queryKey: ['myAllClass', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/myAllClass?email=${user?.email}`);
      return res.data;
    },
  })
  console.log(myAllClass);

 const handleDelete = id => {
    console.log(id);
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
        fetch(`http://localhost:5000/myClass/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              refetch();
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

  return (
    <div className='w-full mx-auto bg-gray-300 px-4 pt-4 pb-20 text-black mt-5'>

<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className='font-bold bg-gradient-to-r from-[#D14D72] to-[#fcc01e]  text-transparent bg-clip-text'>
      <tr>
              <th>#</th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Instructor</th>
              <th>Email</th>
              <th>Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Total Enrolled</th>
              <th>Feedback</th>
              <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      { myAllClass?.map((myClass, index) => <tr
              key={myClass._id}
              >
<td className='text-black bold mx-0 w-0'>
                {index + 1}
              </td> 
             {/* <td><img className='h-12 w-12' src={myClass.image} alt="" /> </td>  */}
               <div className="flex items-center space-x-3"> 
                  <div className="avatar"> 
                    <div className=" rounded-lg w-20 h-16">
                      <img className=' rounded-lg w-20 h-16' src={myClass.image} alt="Avatar Tailwind CSS Component" /> 
                     </div> 
                 </div>
              </div>
              <td>{myClass.name}</td>
              <td>{myClass.instructor}</td>
              <td>{myClass.email}</td>
              <td>{myClass.seats}</td>
              <td>{myClass.price}</td>
              <td>{myClass.status}</td>
              <td className='text-center text-green-600 font-bold'>{myClass.student}</td>
              <td>{myClass.feedback?.[0]}</td>
              <th>
                <button onClick={() => handleDelete(myClass._id)} className=" btn btn-ghost btn-md text-white hover:text-red-500  bg-[#D14D72]"> <FaTrash className='w-4 h-6'></FaTrash> </button>
              </th>
              </tr>)}



     
     
    
    
    </tbody>
  
    
  </table>
</div>



    </div>
  );
};

export default MyClass;