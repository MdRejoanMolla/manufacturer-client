
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Share/Header';
import Home from './components/Home/Home';
import Blog from './components/page/Blogs.js';
import Footer from './components/Share/Footer';

function App() {
      return (
            <div className="App">
                  <Header></Header>
                  <Routes>
                        <Route path="/" element={<Home />}>
                              <Route path="blogs" element={<Blog />} />

                        </Route>
                  </Routes>
                  <Footer></Footer>
            </div>
      );
}

export default App;