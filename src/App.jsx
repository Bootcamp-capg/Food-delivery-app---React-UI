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
import RestFoods from './components/Foods/RestFoods';
import Cart from './components/Cart/Cart';
import Payment from './components/Payment/Payment';
// import { useSelector } from 'react-redux';
import RestaurantList from './components/RestaurantList/RestaurantList';


function App() {

  // const restaurant = useSelector((state) => state.Reducer)
  // const customer = useSelector((state) => state.CustomerReducer)
  
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

        <Route path='/restaurant/addmenu'  element={<AddMenu/> } />
        <Route path='/restaurant/list'  element={<RestaurantList /> } />

        {/* <Route path='/foods' element={  <Foods /> } /> */}
        <Route path='/food/getbyrestaurantid/:id'  element={  <Foods /> } />
        <Route path='/restaurant/foodList/:id'  element={  <RestFoods /> } />
        <Route path='/orders/:id'  element={ <Cart /> } />
        <Route path='/getpayment/:id'  element={ <Payment /> } />
        {/* <Route path='/orders/:id'  element={ <Order /> } /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
