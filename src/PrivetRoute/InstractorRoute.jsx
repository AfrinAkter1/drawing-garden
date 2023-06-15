import { Navigate, useLocation } from 'react-router-dom';
import { ClockLoader } from 'react-spinners';
import useInstractor from '../Hooks/useInstractor';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
const override = {
display:"block",
margin:"auto",
borderColor:"red"
}

const InstractorRoute = ({children}) => {
const {user, loading} = useContext(AuthContext);
const [isInstractor, isInstractorLoading] = useInstractor();
const location = useLocation();

if(loading || isInstractorLoading){
 return(
   <div className=" mt-12">
        <ClockLoader
          cssOverride={override}
          size={150}
          color={"#123abc"}
          loading={loading}
          speedMultiplier={1.5}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
)
}

if(user && isInstractor){
return children;
}
  return <Navigate to="/" state={{from:location}} replace></Navigate>
};

export default InstractorRoute;