import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className=" text-center">
            <img className="h-96 w-96 mx-auto" src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7888.jpg?w=2000" alt="" />
            <Link className="btn text-white bg-gradient-to-r from-[#D14D72] to-[#fcc01e] " to='/'>Back to home</Link>
        </div>
    );
};

export default Error;