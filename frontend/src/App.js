import Register from "./components/Register/Register1";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login1";
import Products from "./components/Products/Products";
import Checkout from "./components/Checkout/Checkout";
import Thanks from "./components/Thanks/Thanks";
import Test from "./components/Test/Test"
import LandingPage from "./components/Landing/LandingPage.js"
import Orders from './components/Orders/Orders'
import OrdersAdmin from "./components/Orders/OrdersAdmin";
import ProductAdmin from "./components/ProductAdmin/ProductAdmin";
import "bootstrap/dist/css/bootstrap.min.css";
//import Portfolio from "./components/Landing/Portfolio"
export const config = {
 // endpoint: `http://prashant-qcartfrontend-v2.herokuapp.com:8082/api/v1`,
  endpoint: `http://localhost:8082/api/v1`
};

function App() {
  return (
    <div className="App">
      {/* TODO: CRIO_TASK_MODULE_LOGIN - To add configure routes and their mapping */}
      <Switch>
        <Route exact path="/">
          <Products />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/thanks">
          <Thanks />
        </Route>
        <Route exact path="/landing">
          <LandingPage />
        </Route>
        <Route exact path="/orders">
          <Orders />
        </Route>
        <Route exact path="/ordersAdmin">
          <OrdersAdmin />
        </Route>
        <Route exact path="/test">
          <Test />
        </Route>
        <Route exact path="/productAdmin">
          <ProductAdmin />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
