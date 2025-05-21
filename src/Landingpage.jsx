import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Content from "./component/Content"
import CardList from "./component/Card";
import Footer from "./component/Footer";

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Content/>
      <CardList />
      <Footer />
    </div>
  );
}
export default LandingPage