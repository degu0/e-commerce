import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Layout from "./components/layout/Layout"
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Contact from './components/pages/contact/Contact';
import Wishlist from './components/pages/wishlist/Wishlist';
import CheckOut from './components/pages/check_out/Check_out';
import Cart from './components/pages/cart/Cart';
import Login from './components/pages/login/logIn/Login';
import SignUp from './components/pages/login/signUp/SignUp';
import Product from './components/pages/product/Product';



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
            <Route path='/cart' element={<Cart/>} />
            <Route path='/product' element={<Product/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signUp' element={<SignUp/>} />
        </Routes>
      </Layout>
    </Router>

  )
}

export default App
