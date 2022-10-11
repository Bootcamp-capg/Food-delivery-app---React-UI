import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home'
import RegisterOpt from './components/RegisterOption/RegisterOpt'
import LoginOpt from './components/LoginOption/LoginOpt'
import RestaurantRegister from './components/Register/RestaurantRegister'
import CustomerRegister from './components/Register/CustomerRegister'
import RestaurantLogin from './components/Login/RestaurantLogin'
import CustomerLogin from './components/Login/CustomerLogin'
import AddMenu from './components/AddMenu/AddMenu'
import Logo from './components/Logo/Logo'
import Foods from './components/Foods/Foods';
import {images} from './constants'
import Cart from './components/Cart/Cart';
import Payment from './components/Payment/Payment';
import { useSelector } from 'react-redux';
import RestaurantList from './components/RestaurantList/RestaurantList';
import Order from './components/Order/Order';


function App() {

  const restaurant = useSelector((state) => state.Reducer)
  console.log(restaurant)

  const foods = [
    { 
      photo:`${images.image11}`,
      title: "Chocolate Donuts",
      price: 120
    },
    {
      photo:`${images.image12}`,
      title: "Creamy Buns",
      price: 99
    },
    {
      photo:`${images.image13}`,
      title: "Gulab Jamun",
      price: 150
    },
    {
      photo:`${images.image14}`,
      title: "Laddu",
      price: 60
    },
    {
      photo:`${images.image15}`,
      title: "Choco Ice cream",
      price: 100
    },
    {
      photo:`${images.image16}`,
      title: "Butterscotch cake",
      price: 450
    },
    {
      photo:`${images.image17}`,
      title: "Barfi",
      price: 200
    },
    {
      photo:`${images.image18}`,
      title: "Vanila Cone",
      price: 80
    }
  ]


  return (
    <BrowserRouter>
    < Logo />
      <Routes>
        <Route path='/' element={ <Home /> }/>

        <Route path='/register' element={ <RegisterOpt /> }/>
        <Route path='/register/restaurant'  element={ <RestaurantRegister /> } />
        <Route path='/register/customer'  element={ <CustomerRegister /> } />

        <Route path='/login'  element={ <LoginOpt /> } />
        <Route path='/login/restaurant'  element={ <RestaurantLogin /> } />
        <Route path='/login/customer'  element={ <CustomerLogin /> } />

        <Route path='/restaurant/addmenu'  element={ <AddMenu /> } />
        <Route path='/restaurant/list'  element={ <RestaurantList /> } />

        {/* <Route path='/foods' element={  <Foods /> } /> */}
        <Route path='/food/getbyrestaurantid/:id'  element={  <Foods /> } />
        <Route path='/orders/:id'  element={ <Cart foods={foods}/> } />
        <Route path='/getpayment/:id'  element={ <Payment /> } />
        {/* <Route path='/orders/:id'  element={ <Order /> } /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
