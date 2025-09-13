
import { BrowserRouter, Route , Routes } from 'react-router'
import Home from './Home'
import Login from './Login'
import Registration from './Registration'
import UserHome from './Customer/UserHome'
import MentorHome from './Mentor/MentorHome'

function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Registration />} />
      <Route path='*' element={<h1>404 Not Found</h1>} />
      <Route path='/user/userhome' element={<UserHome />} />
      <Route path='/mentor/mentorhome' element={<MentorHome />} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
