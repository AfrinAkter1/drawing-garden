import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useSelectCart = () => {
const [axiosSecure] = useAxiosSecure();
const {user,loading} = useContext(AuthContext);
console.log(user);
// const token = localStorage.getItem('access-token');
const {refetch, data: selectedClass =[],isLoading} = useQuery({
queryKey: ['selectClass', user?.email],
enabled: !loading,
queryFn: async ()=>{
const res = await axiosSecure(`/selectClass?email=${user?.email}`)
// console.log('res from axios',res);
return res.data;
}
})
return [selectedClass,refetch,isLoading]
};

export default useSelectCart;