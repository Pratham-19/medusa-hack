//src/layouts/MainPage.tsx
import ProductList from "../components/ProductList";
import Hero from "../components/hero";
import Footer from "../components/Footer";
import "./MainPage.css";
import { BiStore } from "react-icons/bi";

function MainPage(): JSX.Element {
  return (
    <>
      <nav className="navigation-title">
        <h3>
          <BiStore />
            Medusa Store
        </h3>
      </nav>
      <Hero/>
      <ProductList />
      <Footer/>
    </>
  );
}

export default MainPage;