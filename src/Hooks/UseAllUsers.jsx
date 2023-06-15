import { useQuery } from "@tanstack/react-query";



const UseAllUsers = () => {

    const { refetch, data: users=[] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await fetch("http://localhost:5000/users")
            
            return response.json()
          },
      })
    return [users , refetch ]

};

export default UseAllUsers;