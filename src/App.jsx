import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Separation from './components/Separation';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route element={<Home />} path='/'/>
        <Route element={<About />} path='/about'/>
        <Route element={<Portfolio />} path='/portfolio'/>
        <Route element={<Resume />} path='/resume'/>
      </Routes>
      <Separation />
      <Footer />
    </Router>
  )
}

export default App
