

const Class = ({clas}) => {
    const {numberOfStudents, className, classPicture} = clas;
  
    return (
        <div>
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img className="h-52 w-80 rounded" src={classPicture} alt="Shoes" /></figure>
  <div className="card-body m-3">
    <h2 className="card-title">Class Name: {className}</h2>
    <p className="">Number of Student: {numberOfStudents}</p>
   
  </div>
</div>  
        </div>
    );
};

export default Class;