import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import More from "./components/More";
import Navigation from "./components/Navigation";
import ProductShowcase from "./components/ProductShowcase";
import Services from "./components/Services";

const App = () => {
  return (
    <div className="min-h-screen bg-white text-zinc-800">
      <Navigation />

      <main className="min-h-screen overflow-x-hidden">
       
        <section id="home">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <Services /> 

        <section id="technology">
          <ProductShowcase />
        </section>
        
        <section id="specs">
          <More />
        </section>
      </main>

      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default App;