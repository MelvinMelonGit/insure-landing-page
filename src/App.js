import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home/Home';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
