import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Layoutpage from './pages/Layoutpage.jsx';
import Homepage from './pages/Homepage.jsx';
import Aboutpage from './pages/Aboutpage.jsx';
import Services from './pages/Services.jsx';
import Doctorspage from './pages/Doctorspage.jsx';
import Loginpage from './pages/Auth/Loginpage.jsx'
import Registerpage from './pages/Auth/Registerpage.jsx';
import SignupForm from './pages/Auth/SignupForm.jsx';

function App() {
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
            <Route path='register' element={<Registerpage />} />
            <Route path='signup' element={<SignupForm />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
