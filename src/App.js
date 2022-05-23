
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Share/Header';
import Home from './components/Home/Home';
import Footer from './components/Share/Footer';
import Blogs from './components/page/Blogs.js';
import NotFound from './components/page/NotFound';
import About from './components/page/About';

function App() {
      return (
            <div className='max-w-7xl mx-auto px-12'>
                  <Header></Header>
                  <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="blogs" element={<Blogs />} />
                        <Route path="about" element={<About />} />
                        <Route path="*" element={<NotFound />} />
                  </Routes>
                  <Footer></Footer>
            </div>
      );
}

export default App;