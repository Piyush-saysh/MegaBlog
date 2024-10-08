import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import authService from './appwrite/auth';

import {login , logout} from "./store/authSlice"
import {Outlet } from 'react-router-dom'




import './App.css'
import { Footer, Header } from './components';

function App() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch()


  useEffect(()=>{

      authService.getCurrentUser()
      .then((userData)=>{
        
        if(userData){
          dispatch(login({userData}));
        }

        else{
          dispatch(logout())
        }

      })
      .finally(()=>{
        setLoading(false)
      })        
  },[])
  
  return !loading?(
    <div className='full-h-screen flex flex-wrap content-between bg-app'>
      <div className="w-full block">
        <Header />
            <main>
                <Outlet />
            </main>
        <Footer />
      </div>

    </div>
  ): null
}

export default App
