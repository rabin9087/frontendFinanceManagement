import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import SignupPage from './pages/SignupPage';
function App() {
  return (
    <div className="wrapper">
     <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path= 'signup' element={<SignupPage/>}/>
      <Route path= 'dashboard' element={<Dashboard/>}/>
     </Routes>

    </div>
  );
}

export default App;
