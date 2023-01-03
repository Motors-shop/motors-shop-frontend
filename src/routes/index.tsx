import { Routes as Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import SellerProducts from "../pages/SellerProducts";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
      {/* <Route path="/login" element={} /> */}
      {/* <Route path="/register" element={} /> */}
      <Route path="/:user_id/products" element={<SellerProducts />} />
      {/* <Route path="*" element={} /> */}
    </Switch>
  );
};

export default Routes;
