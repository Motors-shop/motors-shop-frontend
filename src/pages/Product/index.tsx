import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CommentArea from "../../components/CommentArea";
import Comments from "./Comments/indext";
import ProductInfo from "./ProductInfo";
import UserCard from "../../components/UserCard";
import Gallery from "./Gallery";

import { Container } from "./style";
import { api } from "../../service/api";
import { IProductProps } from "./types";

const Product = () => {
  const [productData, setProductData] = useState<IProductProps>();
  const [loading, setLoading] = useState<boolean>(true);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get(`/vehicles/${id}`)
      .then((res) => {
        setLoading(false);
        setProductData(res.data);
      })
      .catch((_) => navigate("/"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        {!loading && (
          <>
            <div>
              <ProductInfo data={productData!} />
              <div>
                <Gallery data={productData!} />
                <UserCard />
              </div>
            </div>
            <Comments />
            <CommentArea />
          </>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default Product;
