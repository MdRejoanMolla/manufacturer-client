import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/HomePage/Header/Header';
import Home from './components/HomePage/Home/Home';
import Blog from './components/page/Blog/Blog';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="expenses" element={<Blog />} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
