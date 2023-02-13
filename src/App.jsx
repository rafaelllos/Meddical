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
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
