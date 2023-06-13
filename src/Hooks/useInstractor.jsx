import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useInstractor = () =>{
    const {user} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const {data: isInstractor, isLoading: isInstractorLoding} = useQuery({
        queryKey: ['isInstractor', user?.email],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/users/instractor/${user.email}`);
            console.log('is instractor response', res)
            return res.data.instractor;
        }
    })
    return [isInstractor, isInstractorLoding]
}
export default useInstractor;