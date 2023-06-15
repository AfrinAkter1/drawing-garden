
import  { useEffect, useState } from 'react';
import PopularClassCard from './PopularClassCard';
// import SectionTitle from '../../../Component/SectionTitle';


const PopularClasses = () => {
const [popularClass,setPopularClass] = useState([]);
useEffect(()=>{
fetch('http://localhost:5000/popularClass/approved')
.then(res=>res.json())
.then(data=>setPopularClass(data))

},[])
  return (
    <div className="my-10 mx-12">
 <h3 className='text-center text-2xl font-bold bg-gradient-to-r from-[#D14D72] to-[#fcc01e] text-transparent bg-clip-text'><i>Popular Classes</i></h3>
<div className='grid grid-cols-1  md:grid-cols-3   lg:grid-cols-3 gap-8    xs:w-xl sm:w-xl xs:w-full md:max-w-full lg:max-w-screen-xl'>
      {
popularClass.map(classes=><PopularClassCard key={classes._id} classes={classes}></PopularClassCard>)
}
    </div>
</div>
  );
};

export default PopularClasses;