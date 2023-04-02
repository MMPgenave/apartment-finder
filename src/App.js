import styled from "styled-components";
import tw from "twin.macro";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Sidebar, Navbar } from "./components";
import {
  About,
  ContactUs,
  Error,
  FAQ,
  Features,
  Home,
  SingleProduct,
  Products,
  Login
} from "./pages";
import { useUiContext } from "./context/UiContext";
import Loading from "./components/Loading";
import ErrorOnLoadingTotalProducts from "./components/ErrorOnLoadingTotalProducts";
function App() {
  const { state, dispatch } = useUiContext();
  if (state.isErrorOnTotalProductsLoading) {
    return <ErrorOnLoadingTotalProducts></ErrorOnLoadingTotalProducts>;
  }
  if (state.isLoading) {
    return <Loading />;
  } else {
    return (
      <MainContainer>
        <div>
          <Router>
            <Navbar />
            <Sidebar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="products" element={<Products />} />
              <Route path="features" element={<Features />} />
              <Route path="contactUs" element={<ContactUs />} />
              <Route path="faq" element={<FAQ />} />
              <Route path="*" element={<Error />} />
              <Route path="login" element={<Login />} />
              <Route path="product/:id" element={<SingleProduct />} />
            </Routes>

            <Footer />
          </Router>
        </div>
      </MainContainer>
    );
  }
}
export default App;
const MainContainer = styled.main.attrs({})`
  & {
    div {
      ${tw`bg-gray-900 h-full text-gray-50 `}
    }
  }
`;
