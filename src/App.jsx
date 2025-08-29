import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import Home from './pages/Home';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import NotFound from './components/NotFound';
import Feathericonpage from './pages/Feathericonpage';
import Typography from './pages/Typography';
import SamplePage from './pages/SamplePage';
import Login from './pages/Login';
import Register from './pages/Register';
import ThemeColors from './components/ThemeColors';
import TailwindColor from './components/TailwindColor';
import ColorsPage from './pages/ColorsPage';
import { ToastContainer } from 'react-toastify';
import Notifications from './components/Notifications';

function AppContent() {
  const location = useLocation()
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [expandnav, setExpandnav] = useState(window.innerWidth >= 1223)
  const savedTheme = localStorage.getItem('theme') || 'light'
  const [theme, setTheme] = useState(savedTheme)
  const [showtop, setshowtop] = useState(true)

  useEffect(() => {
    if (savedTheme && savedTheme === 'dark') {
      setTheme('dark');
      document.body.classList.add('dark');
    } else {
      setTheme('light')
      document.body.classList.remove('dark')
    }
  }, [savedTheme])
  useEffect(() => {
    switch (location.pathname) {
      case "/typography": 
      document.title = "Typography | Datta able"
      break
      case "/icon-feather": 
      document.title = "Feather Icon | Datta able"
      break
      case "/sample-page": 
      document.title = "Sample Page | Datta able"
      break
      case "/login": 
      document.title = "Login | Datta able"
      break
      case "/register": 
      document.title = "Register | Datta able"
      break
      case "/color": 
      document.title = "Color | Datta able"
      break
      default: 
      document.title = "Home | Datta able"
    }
  }, [location])

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScreenWidth(width);
      if (width >= 1223) {
        setExpandnav(true)
      } else if (width < 1223) {
        setExpandnav(false)
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const close = () => {
    if (screenWidth < 1223 && expandnav) {
      setExpandnav(false)
    }
  }

  
  


  return (
    <>
      <section className="page-wrapper">
        <Navbar show={expandnav} theme={theme} />
        <div className={`page-wrapper2 ${expandnav && screenWidth < 1223 ? 'blur' : ''}`} onClick={close}>
          <Navbar2 hide={setExpandnav} setTheme={setTheme} theme={theme} showtop={showtop} />
          <Routes>
            <Route path='*' element={<NotFound show={setExpandnav} theme={theme} expandnav={expandnav} />} />
            <Route path="/" element={<Home show={expandnav} theme={theme} />} />
            <Route path="/icon-feather" element={<Feathericonpage show={expandnav} theme={theme} />} />
            <Route path="/typography" element={<Typography show={expandnav} theme={theme} />} />
            <Route path="/sample-page" element={<SamplePage show={expandnav} theme={theme} />} />
            <Route path="/color" element={<ColorsPage show={expandnav} theme={theme} />} />
            <Route path="/login" element={<Login showtop={showtop} setshowtop={setshowtop} theme={theme} show={setExpandnav} />} />
            <Route path="/register" element={<Register showtop={showtop} setshowtop={setshowtop} theme={theme} show={setExpandnav} />} />
          </Routes>
        </div>
      </section>
      <ToastContainer />
    </>
  )
}

export default function App() {
  return(
    <>
    <Router>
      <AppContent />
    </Router>
    </>
  )
}
