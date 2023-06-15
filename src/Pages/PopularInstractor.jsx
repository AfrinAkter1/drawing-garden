
 import { useEffect, useState } from 'react';
import PopularInstractorCard from './PopularInstractorCard';


const PopularInstractor = () => {
const [popularInstractor, setPopularInstractor] = useState([]);
useEffect(()=>{
fetch('https://assignment12-server-murex.vercel.app/popularInstractors/instractor')
.then(res=>res.json())
.then(data=>{
console.log(data)
setPopularInstractor(data)
})

},[])

  return (
    <div className='my-10 mx-12'>
      <h3 className='text-center text-2xl font-bold bg-gradient-to-r from-[#D14D72] to-[#fcc01e] text-transparent bg-clip-text'><i>Popular Instructor</i></h3>
  
<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8   xs:w-xl w-full sm:w-xl xs:w-full md:max-w-full lg:max-w-screen-xl'>
{
popularInstractor.map(instractor=><PopularInstractorCard  instractor={instractor} key={instractor.name} ></PopularInstractorCard> )
}
</div>
</div>
  );
};

export default PopularInstractor;