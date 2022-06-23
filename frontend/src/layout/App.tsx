import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from '../pages/Dashboard';
import AdminLogin from '../pages/AdminLogin';
import Register from '../pages/Register';
import '../styles/App.css';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminDashboard from '../pages/AdminDashboard';
import AddPatient from '../pages/AddPatient/AddPatient';

function App() {
  return (
    <>
      <Router>
        <div className='app-container'>
          <Header />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/admin-login' element={<AdminLogin />} />
            <Route path='/register' element={<Register />} />
            <Route path='/admin-dashboard' element={<AdminDashboard />} />
            <Route path='/add-patient' element={<AddPatient />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
