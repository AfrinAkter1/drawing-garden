


import Swal from 'sweetalert2';
import useSelectCart from '../../Hooks/useSelectCart';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import MySelectClassRow from './MySelectClassRow';
// import SectionTitle from '../../../Component/SectionTitle';


const MySelectedClass = () => {
  const { user } = useContext(AuthContext);
  const [selectedClass, refetch,isLoading] = useSelectCart();

  const handleDelete = id => {
    // console.log(id);
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
        fetch(`https://assignment12-server-murex.vercel.app/selectClass/${id}`, {
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
    <div className='w-full bg-gray-100 px-4 pt-4 pb-20 text-black mt-5'>
      {/* <SectionTitle subheading="Class Show Now" heading="All Select Class"></SectionTitle> */}
        <h2 className=' text-center text-xl font-bold bg-gradient-to-r from-[#D14D72] to-[#fcc01e] text-transparent bg-clip-text'>Total Selected Class: {selectedClass?.length}</h2>
      <div className="overflow-x-auto mt-9">
        <table className="table border rounded">
          {/* head */}
          <thead className='text-xl font-bold bg-gradient-to-r from-[#D14D72] to-[#fcc01e] text-transparent bg-clip-text'>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Instructor</th>
              <th>Email</th>
              <th>Seats</th>
              <th>Price</th>
              <th>Delete</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {
              selectedClass?.map((selectClass, index) => <MySelectClassRow
                key={selectClass._id}
                selectClass={selectClass}
                handleDelete={handleDelete}
                index={index}
              ></MySelectClassRow>)
            }

          </tbody>
        </table>
      </div>

    </div>
  );
};

export default MySelectedClass;