import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useInstractor = () =>{
    const {user} = useContext(AuthContext)
    console.log(user.email)
    const [axiosSecure] = useAxiosSecure();
    const {data: isInstractor, isLoading: isInstractorLoading} = useQuery({
        queryKey: ['isInstractor', user?.email],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/users/instractor/${user.email}`);
            console.log('is Instractor response', res)
            return res.data.instractor;
        }
    })
  
    return [isInstractor, isInstractorLoading]
}
export default useInstractor;