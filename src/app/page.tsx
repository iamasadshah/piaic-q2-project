import Hero from "./components/Hero";
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
    </>
  );
}
