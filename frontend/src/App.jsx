import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Doctor from './pages/Doctor'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import Myprofile from './pages/Myprofile'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const location = useLocation();
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <ToastContainer/>
      {/* We added navbar component before hitting any routes so that, it will be visible for all the components. */}
    
      {
        location.pathname != ('/login') &&   <Navbar/>
      }
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/doctor' element={<Doctor/>}/>
        <Route path='/doctor/:speciality' element={<Doctor/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>cd
        <Route path='/my-profile' element={<Myprofile/>}/>
        <Route path='/my-appointments' element={<MyAppointments/>}/>
        <Route path='/appointment/:docId' element={<Appointment/>}/>
      </Routes>
      {/* CONDITION RENDER FOOTER ON ALL PAGES EXCEPT THE LOGIN PAGE */}
      {!(location.pathname === '/login') && <Footer />}

      {/* <Footer/> */}
     
      
    </div>
  )
}

export default App 
