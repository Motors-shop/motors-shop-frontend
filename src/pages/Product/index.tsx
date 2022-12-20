import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Container } from "./style";
import ProductInfo from "./ProductInfo";
import Comments from "./Comments/indext";
import CommentArea from "../../components/CommentArea";

const Product = () => {
  return (
    <>
      <Navbar />
      <Container>
        <section>
          <ProductInfo />
          <Comments />
          <CommentArea />
        </section>
        <aside></aside>
      </Container>
      <Footer />
    </>
  );
};

export default Product;
