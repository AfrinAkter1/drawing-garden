
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import PaymentHistoryCard from "./PaymentHistoryCard";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const PaymentHistory = () => {
  const { loading,user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure()
  const { data: payments= [], } = useQuery({
    queryKey: ['payments'],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user?.email}`);
      return res.data;
    },
  })
   
  return (
    <div>
      <h2 className='text-center text-3xl my-4  text-blue-800'> Payment History  </h2>
 <div className=''>
{
payments.map(payment=><PaymentHistoryCard
 key={payment._id}
 payment={payment}>
</PaymentHistoryCard>)
}
</div>

</div>    
  );
};

export default PaymentHistory;