import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';

const App = () => {
  return (
    <div className='h-screen w-screen'>
      <Router>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/dashboard' element={<Dashboard />}/>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App