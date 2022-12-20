import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Container } from "./style";
import ProductInfo from "./ProductInfo";
import Comments from "./Comments/indext";

const Product = () => {
  return (
    <>
      <Navbar />
      <Container>
        <section>
          <ProductInfo />
          <Comments />
        </section>
        <aside></aside>
      </Container>
      <Footer />
    </>
  );
};

export default Product;
