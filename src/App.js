import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import ProductUses from "./components/ProductUses/ProductUses";
import Team from "./components/Team/Team";
import TrustedBy from "./components/TrustedBy/TrustedBy";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <TrustedBy />
      <ProductUses />
      <Features />
      <Team />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
