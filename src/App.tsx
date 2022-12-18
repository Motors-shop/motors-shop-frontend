import Footer from "./components/Footer";
import Input from "./components/Input";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Input placeholder="placeholder" label="label" />
      <Input placeholder="placeholder" type="textarea" label="label" />
      <Footer />
    </>
  );
}

export default App;
