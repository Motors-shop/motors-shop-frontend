import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Container } from "./style";
import ProductInfo from "./ProductInfo";
import Comments from "./Comments/indext";
import UserCard from "./UserCard";
import Gallery from "./Gallery";

const Product = () => {
  return (
    <>
      <Navbar />
      <Container>
        <div>
          <ProductInfo />
          <div>
            <Gallery />
            <UserCard />
          </div>
        </div>
        <Comments />
      </Container>
      <Footer />
    </>
  );
};

export default Product;
