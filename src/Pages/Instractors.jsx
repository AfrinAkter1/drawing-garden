
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../Hooks/useAxiosSecure';
import InstractorsCard from './InstractorsCard';


const Instractors = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: instractors = [] } = useQuery({
    queryKey: ['instractors'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/allInstractors/instractor`);
      return res.data;
    },
  })
  console.log(instractors.image);
  return (
    <div className='my-10'>
      <div className='grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-3 xs:w-xl sm:w-xl xs:w-full md:max-w-full lg:max-w-screen-xl'>
        {
          instractors.map(instractor => <InstractorsCard instractor={instractor} key={instractor._id}></InstractorsCard>)
        }
      </div>
    </div>
  );
};

export default Instractors;