import useClasses from '../../Hooks/useClasses';
import ManageClassTable from './ManageClassTable';


const ManageClasses = () => {
const [classes] = useClasses();
console.log(classes,44);
  return (
     <div className='w-full bg-gray-100 px-4 pt-4 pb-20 text-black mt-5'>
      {/* <SectionTitle subheading="Class Show Now" heading="All Select Class"></SectionTitle> */}
<h2 className='text-3xl text-center font-bold bg-gradient-to-r from-[#D14D72] to-[#fcc01e]  text-transparent bg-clip-text'>Manage all classes</h2>
      <div className="overflow-x-auto mt-9">
        <table className="table border rounded">
          {/* head */}
          <thead className='text-lg font-bold bg-gradient-to-r from-[#D14D72] to-[#fcc01e]  text-transparent bg-clip-text'>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Instructor</th>
              <th>Email</th>
              <th>Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Approved</th>
              <th>Deny</th>
              <th>Feedback</th>
              
            </tr>
          </thead>
          <tbody>
            {
             classes?.map((singleClass, index) => <ManageClassTable
                key={singleClass._id}
                singleClass={singleClass}
                // handleDelete={handleDelete}
                index={index}
              ></ManageClassTable>)
            }

          </tbody>
        </table>
      </div>

    </div>
  );
};

export default ManageClasses;