import { Routes as Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Product from "../pages/Product";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/register" element={} /> */}
      {/* <Route path="/:user_id/products" element={} /> */}
      <Route path="*" element={<NotFound />} />
    </Switch>
  );
};

export default Routes;
