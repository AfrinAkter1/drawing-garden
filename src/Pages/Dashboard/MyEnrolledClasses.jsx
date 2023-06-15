
import { useQuery } from '@tanstack/react-query';
// import SectionTitle from '../../../Component/SectionTitle';

import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import MyEnrolledClassCard from './MyEnrolledClassCard';

const MyEnrolledClasses = () => {

 const { loading,user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: enrollStudent= [],} = useQuery({
    queryKey: ['enrollStudent'],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user?.email}`);
      return res.data;
    },
  })
console.log(enrollStudent);

  return (
  <div className='w-full bg-gray-100 px-4 pt-4 pb-20 text-black mt-5'>
      {/* <SectionTitle subheading="Class Show Now" heading="All Enrolled Class"></SectionTitle> */}
        <h2 className='text-xl text-center font-bold bg-gradient-to-r from-[#D14D72] to-[#fcc01e] text-transparent bg-clip-text'>Total Enrolled Class: {enrollStudent?.length}</h2>
      <div className="overflow-x-auto mt-9 text-center">
        <table className="table border rounded">
          {/* head */}
          <thead className=' text-xl font-bold bg-gradient-to-r from-[#D14D72] to-[#fcc01e] text-transparent bg-clip-text'>
            <tr>
              <th>#</th>
              {/* <th>Image</th> */}
              <th>Class Name</th>
              <th>Date</th>
              <th>Email</th>
              <th>Price</th>
              <th>Pending</th>
            </tr>
          </thead>
          <tbody className='text-center'>
            {
              enrollStudent?.map((enroll, index) => <MyEnrolledClassCard
                key={enroll._id}
                enroll={enroll}
                index={index}
              ></MyEnrolledClassCard>)
            }

          </tbody>
        </table>
      </div>

    </div>
  );
};

export default MyEnrolledClasses;