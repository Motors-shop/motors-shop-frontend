import { Helmet } from "react-helmet-async";

import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anek+Malayalam:wght@400;700&family=Inter:wght@400;600&family=Lexend:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
    </>
  );
}

export default App;
