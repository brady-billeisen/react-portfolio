import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navigation from './components/Navigation'

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route element={<Home />} path='/'/>
        <Route element={<About />} path='/about'/>
        <Route element={<Contact />} path='/contact'/>
      </Routes>
    </Router>
  )
}

export default App
