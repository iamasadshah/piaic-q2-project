import Copyright from "./components/Copyright";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";
import Products from "./components/Products";
import Promotions from "./components/Promotions";
import Unique from "./components/Unique";

export default function Home() {
  return (
    <>
      <Hero />
      <Promotions />
      <Products />
      <Unique />
      <Newsletter />
      <Footer />
      <Copyright />
    </>
  );
}
