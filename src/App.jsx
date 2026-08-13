import "./index.css";
import { PageWrapper, Navbar, Footer } from "./components/layout";
import { Hero, Services, Process } from "./components/sections";

export default function App() {
  return (
    <PageWrapper>
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Footer />
    </PageWrapper>
  );
}
