import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Shop } from './Pages/Shop';
import { ShopCategory } from './Pages/ShopCategory';
import { Products } from './Pages/Products';
import { Cart } from './Pages/Cart';
import { Loginsignup } from './Pages/Loginsignup';
function App() {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/> 
          <Route path='/men' element={<ShopCategory category="men"/>}/>
          <Route path='/women' element={<ShopCategory category="women"/>}/>
          <Route path='/kids' element={<ShopCategory category="kids"/>}/>
          <Route path='/product' element={<Products/>}>
            <Route path=':productId' element={<Products/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Loginsignup/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;
