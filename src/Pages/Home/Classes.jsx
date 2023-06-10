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
        <div>
            <h2><i>Our Popular Classes</i></h2>
          {
            classes.map(clas =><Class
            key={clas._id}
            
            ></Class>)
          }
        </div>
    );
};

export default Classes;