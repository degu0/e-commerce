import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';


import Layout from "./components/layout/Layout"
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Wishlist from './pages/wishlist/Wishlist';
import CheckOut from './pages/check_out/Check_out';
import Login from './pages/login/logIn/Login';
import SignUp from './pages/login/signUp/SignUp';
import Product from './pages/product/Product';



function App() {
  return (
    <Router>
      <Layout>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/wishlist' element={<Wishlist/>} />
            <Route path='/checkOut' element={<CheckOut/>} />
            <Route path='/product' element={<Product/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signUp' element={<SignUp/>} />
        </Routes>
      </Layout>
    </Router>

  )
}

export default App
