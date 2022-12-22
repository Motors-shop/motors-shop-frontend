import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import UserCard from "../../components/UserCard";
import { Contaier } from "./style";

const Home = () => {
  return (
    <>
      <Navbar />
      <Contaier>
        <UserCard profile admin />
      </Contaier>
      <Footer />
    </>
  );
};

export default Home;
