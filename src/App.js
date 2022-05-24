
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Share/Header';
import Home from './components/Home/Home';
import Footer from './components/Share/Footer';
import Blogs from './components/page/Blogs.js';
import NotFound from './components/page/NotFound';
import About from './components/page/About';
import MyPortfolio from './components/page/MyPortfolio';
import Login from './components/page/Login/Login';
import Register from './components/page/Login/Register';

function App() {
      return (
            <div className='max-w-7xl mx-auto px-12'>
                  <Header></Header>
                  <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="blogs" element={<Blogs />} />
                        <Route path="about" element={<About />} />
                        <Route path="myPortfolio" element={<MyPortfolio></MyPortfolio>} />
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                        <Route path="*" element={<NotFound />} />
                  </Routes>
                  <Footer></Footer>
            </div>
      );
}

export default App;