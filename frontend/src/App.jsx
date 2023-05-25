import './App.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import Layoutpage from './pages/Layoutpage.jsx'
import Homepage from './pages/Homepage.jsx'
import Aboutpage from './pages/Aboutpage.jsx'
import Services from './pages/Services.jsx'
import Doctorspage from './pages/Doctorspage.jsx'
import Loginpage from './pages/Auth/Loginpage.jsx'
import Registerpage from './pages/Auth/Registerpage.jsx'
import Accountpage from './pages/Auth/Accountpage/Accountpage.jsx'

import PrivateRoute from './pages/Auth/PrivateRoute'

import ABC from './pages/Auth/ABC.jsx'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layoutpage />}>
            <Route index element={<Homepage />} />
            <Route path='about' element={<Aboutpage />} />
            <Route path='services' element={<Services />} />
            <Route path='doctors' element={<Doctorspage />} />
            <Route path='login' element={<Loginpage />} />
            <Route path='registration' element={<Registerpage />} />
            <Route path='ABC' element={<ABC />} />

            <Route element={<PrivateRoute />}>
              <Route path='account' element={<Accountpage />} />
            </Route>

            <Route path="*" element={<div>404... not found </div>} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
