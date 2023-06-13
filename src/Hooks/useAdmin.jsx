import { useContext } from "react"
import { AuthContext } from "../Providers/AuthProvider"
import useAxiosSecure from "./useAxiosSecure"
import { useQuery } from "@tanstack/react-query"

const useAdmin = () =>{
    const {user} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const {data: isAdmin, isLoading: isAdminLoding} = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/users/admin/${user.email}`);
            console.log('is admin response', res)
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoding]
}
export default useAdmin;