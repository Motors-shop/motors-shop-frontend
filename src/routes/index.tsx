import { Routes as Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
    </Switch>
  );
};

export default Routes;
