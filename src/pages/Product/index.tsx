import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Container } from "./style";
import ProductInfo from "./ProductInfo";

const Product = () => {
  return (
    <>
      <Navbar />
      <Container>
        <section>
          <ProductInfo />
        </section>
        <aside></aside>
      </Container>
      <Footer />
    </>
  );
};

export default Product;
