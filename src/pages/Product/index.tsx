import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import NewCommentArea from "../../components/NewCommentArea";
import Comments from "../../components/Comments";
import ProductInfo from "../../components/ProductInfo";
import UserCard from "../../components/UserCard";
import Gallery from "../../components/Gallery";

import { api } from "../../service/api";
import { IProductProps } from "./types";
import { Container } from "./style";

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
                <UserCard product data={productData!.owner} />
              </div>
            </div>
            <Comments />
            <NewCommentArea />
          </>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default Product;
