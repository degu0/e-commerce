import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';


import { Layout } from "./components/layout/Layout"
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { Contact } from './pages/contact/Contact';
import { Wishlist } from './pages/wishlist/Wishlist';
import { CheckOut } from './pages/check_out/Check_out';
import { Login } from './pages/login/logIn/Login';
import { SignUp } from './pages/login/signUp/SignUp';
import { ProductDetail } from './pages/product/ProductDetail';
import { CartShopping } from './pages/cart_shooping/Cart_Shopping';
import { Category } from './pages/category/Category';
import { Order } from './pages/order/Order';



export function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/cart' element={<CartShopping />} />
          <Route path='/checkOut' element={<CheckOut />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/category/:category' element={<Category />} />
          <Route path='/myOrder' element={<Order />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signUp' element={<SignUp />} />
        </Routes>
      </Layout>
    </Router>

  )
}
