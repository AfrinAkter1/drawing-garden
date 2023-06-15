import { useQuery } from "@tanstack/react-query";



const UseAllUsers = () => {

    const { refetch, data: users=[] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await fetch("https://assignment12-server-murex.vercel.app/users")
            
            return response.json()
          },
      })
    return [users , refetch ]

};

export default UseAllUsers;