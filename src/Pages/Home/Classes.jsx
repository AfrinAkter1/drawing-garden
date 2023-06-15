import { useEffect, useState } from "react";
import Class from "./Class";


const Classes = () => {
    const [classes, setClasses] = useState([])
    useEffect(() =>{
          fetch('http://localhost:5000/home')
          .then(res => res.json())
          .then(data => {
            setClasses(data)
          })
    },[])

    return (
        <div className="my-16">
            <h2 className="my-4 text-3xl text-center font-bold bg-gradient-to-r from-[#D14D72] to-[#fcc01e] text-transparent bg-clip-text"><i>Our Popular Classes</i></h2>
         <div className="md:grid grid-cols-3 gap-9">
         {
            classes.map(clas =><Class
            key={clas._id}
            clas={clas}
            ></Class>)
          }
         </div>
        </div>
    );
};

export default Classes;