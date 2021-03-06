
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Share/Header';
import Home from './components/Home/Home';
import Blogs from './components/page/Blogs.js';
import NotFound from './components/page/NotFound';
import About from './components/page/About';
import MyPortfolio from './components/page/MyPortfolio';
import Login from './components/page/Login/Login';
import Register from './components/page/Login/Register';
import Parts from './components/page/Parts';
import RequireAuth from './components/page/Login/RequireAuth';
import Dashboard from './components/Dashboard/Dashboard';
import Order from './components/page/Modal';
import MyProfile from './components/Dashboard/MyProfile';
import AddReview from './components/Dashboard/AddReview';
import MyOrder from './components/Dashboard/MyOrder';
import Users from './components/Dashboard/Users';
import RequireAdmin from './components/page/Login/RequireAdmin';
import AddProduct from './components/Dashboard/AddProduct';
import OrderParts from './components/Share/OrderParts';

function App() {
      return (
            <div className='max-w-7xl mx-auto px-12'>
                  <Header></Header>
                  <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="blogs" element={<Blogs />} />
                        <Route path="tools" element={<Parts />} />
                        <Route path="about" element={<About />} />
                        <Route path="/tool/:toolId" element={<RequireAuth><OrderParts /></RequireAuth>} />
                        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >



                              <Route index element={<MyProfile />}></Route>

                              <Route path="myOrder" element={<MyOrder />}></Route>
                              <Route path="addProduct" element={<AddProduct />}></Route>
                              <Route path="addReview" element={<AddReview />}></Route>
                              <Route path="users" element={
                                    <RequireAdmin><Users /></RequireAdmin>
                              }></Route>

                              {/* <Route path="payment/:id" element={<Payment></Payment>}></Route>
                              <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
                              <Route path="addDoctor" element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route>
                              <Route path="manageDoctor" element={<RequireAdmin><ManageDoctors></ManageDoctors></RequireAdmin>}></Route> */}
                        </Route>
                        <Route path="myPortfolio" element={<RequireAuth>
                              <MyPortfolio />
                        </RequireAuth>} />
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                        <Route path="*" element={<NotFound />} />
                  </Routes>


            </div>
      );
}

export default App;