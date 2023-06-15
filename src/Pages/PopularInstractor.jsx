
 import { useEffect, useState } from 'react';
// import SectionTitle from '../../../Component/SectionTitle';
import PopularInstractorCard from './PopularInstractorCard';


const PopularInstractor = () => {
const [popularInstractor, setPopularInstractor] = useState([]);
useEffect(()=>{
fetch('http://localhost:5000/popularInstractors/instractor')
.then(res=>res.json())
.then(data=>{
console.log(data)
setPopularInstractor(data)
})

},[])

  return (
    <div className='my-10'>
      {/* <SectionTitle heading="Popular Instructor" subHeading="Popular Instructor Information"></SectionTitle> */}
<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8  mx-auto  xs:w-xl w-full sm:w-xl xs:w-full md:max-w-full lg:max-w-screen-xl'>
{
popularInstractor.map(instractor=><PopularInstractorCard  instractor={instructor} key={instractor.name} ></PopularInstractorCard> )
}
</div>
</div>
  );
};

export default PopularInstractor;