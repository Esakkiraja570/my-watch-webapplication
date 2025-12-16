
import './App.css';
import Page from '../src/Routing/Page'
import { CartProvider } from './Routing/Cartcontext';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div>
      <Page/>
      <CartProvider>
      <Routes>
        {/* <Route path="/shop" element={<Shop />} /> */}
        {/* <Route path="/cart" element={<Cartpage />} /> */}
      </Routes>
    </CartProvider>
      
    </div>
  );
}

export default App;
