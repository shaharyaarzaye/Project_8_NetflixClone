import {Navigate, Route , Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import SignUpPage from '../pages/SignUpPage'
import HomePage from '../pages/home/HomePage'
import { Toaster } from 'react-hot-toast'
import { useAuthStore } from '../store/authUser.js'
import { useEffect } from 'react'
import {Loader} from 'lucide-react'

function App() {
  const {user , isCkeckingAuth , authCheck} = useAuthStore()
  console.log("auth user is here : " , user )
  useEffect(() => {
    authCheck();
  },[authCheck])

  if(isCkeckingAuth){
    return (
      <div className='h-screen'>
        <div className="flex justify-center items-center bg-black h-full">
          <Loader className="animate-spin text-red-600 w-10 h-10" />
        </div>
      </div>
    )
  }

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={!user ? <LoginPage/> : <Navigate to="/" />}/>
      <Route path='/signup' element={!user ? <SignUpPage/> : <Navigate to={"/"} />}/>
    </Routes>
    <Toaster/>
    </>
  )
}

export default App
