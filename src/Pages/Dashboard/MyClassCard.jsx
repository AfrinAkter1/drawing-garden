
import { FaTrash } from 'react-icons/fa';

const MyClassCard = ({myClass,index,handleDelete}) => {
const {_id,name,email,instructor,image,student,feedback,seats,price,status,} = myClass;
console.log(myClass);
 return (
    
      <tr className='text-black bold'>
        <th >
          {index + 1}
        </th>
        <td><img className='h-12 w-12' src={image} alt="" /> </td>
          
        
        <td>{name}</td>
        <td>{instructor}</td>
        <td>{email}</td>
        <td>{seats}</td>
        <td>{price}</td>
        <td>{status}</td>
        <td className='text-center text-green-600 font-bold'>{student}</td>
        <td>{feedback?.[0]}</td>
        <th>
          <button onClick={() => handleDelete(_id)} className=" btn btn-ghost btn-md text-white hover:text-red-500  bg-red-500"> <FaTrash className='w-6 h-6'></FaTrash> </button>
        </th>
      </tr>
  
  );
};

export default MyClassCard;