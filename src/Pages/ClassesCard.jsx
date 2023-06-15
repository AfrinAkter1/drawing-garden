import  { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Slide } from 'react-awesome-reveal';
import { AuthContext } from '../Providers/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import useInstractor from '../Hooks/useInstractor';

const ClassesCard = ({ singleClass }) => {
  const { _id, name, image, student, instructor, seats, price } = singleClass;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  
  // const [isAdmin] = useAdmin();
  // const [isInstractor] = useInstractor();


  const handleAddClass = add => {

    

    if (user && user.email) {
      const selectClasses = { selectClassId: _id, name, image, instructor, seats, price, email: user?.email }
      console.log(selectClasses);
      fetch('http://localhost:5000/selectClass', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(selectClasses)
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
              position: 'top-center',
              icon: 'success',
              title: 'Your class selected',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
    }
    else {
      Swal.fire({
        title: 'Please Login First',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login Now'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } })
        }
      })
    }
  }

  return (
    <div className={`card lg:w-96 md:w-96 w-full  shadow-xl ${seats === 0 ? 'bg-red-500' : 'bg-base-200'}`}>
      <figure className="px-10 pt-10 h-60">
        <img  src={image} alt="Shoes" className="rounded-xl h-48 w-72  transition-transform duration-1000 ease-in-out hover:scale-125 cursor-zoom-in" />
      </figure>
      <Slide>
        <div className="card-body  ">
          <h2 className="card-title">Class Name:{name}</h2>
          <p> Instructor: {instructor}.</p>
          <p>Enrolled Student: {student}.</p>
          <div className=''>
            <p>Seats: {seats}.</p>
            <p className='text-slate-500'> Price: ${price}.</p>
          </div>
          <div className="card-actions">
            {/* {
            isAdmin ?
              <><button onClick={handleAddClass} className="btn btn-primary" disabled >Select</button> </>
              : isInstructor ?
                <><button onClick={handleAddClass} className="btn btn-primary" disabled>Select</button></> :
                <><button onClick={handleAddClass} className="btn btn-primary" disabled={disabled}>Select</button></>
          } */}
            { seats === 0 ? (
              <>
                <button
                  disabled
                  onClick={handleAddClass}
                  className='btn bg-gradient-to-r from-[#D14D72] to-[#fcc01e] text-white hover:bg-[#b31409] hover:text-white border-0'
                >
                  Select
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleAddClass}
                  className='btn bg-gradient-to-r from-[#D14D72] to-[#fcc01e] text-white hover:bg-[#4507d6] hover:text-white border-0'
                >
                  Select
                </button>
              </>
            )}
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default ClassesCard;