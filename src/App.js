import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
 import {onAuthStateChanged} from "firebase/auth"
import { useEffect } from "react";
import auth from "./Firebase/Firebase.config";
import { useDispatch } from "react-redux";
import { getUser, setUser, toggleLoading } from "./features/auth/authSlice";
import { Toaster } from "react-hot-toast";

function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
   onAuthStateChanged(auth,(user)=>{
     if (user){
       dispatch(getUser(user.email))
       
     }
     else{
      dispatch(toggleLoading())
     }
   })
  },[])
  return (
    <> 
    <Toaster></Toaster>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
