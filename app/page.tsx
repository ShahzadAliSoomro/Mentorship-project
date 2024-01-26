import Hero from "./components/Hero";
import Categories from "./components/Categories";
import IntroCoders from "./components/IntroCoders";
import SingleCard from "./components/SingleCard";
import AdmissionProcess from "./components/AdmissionProcess";
import LogosSlider from "./components/LogosSlider";
import OurPeculiarCurriculum from "./components/OurPeculiarCurriculum";
import VerefyCertificate from "./components/VerefyCertificate";
import ScholorShip from "./components/ScholorShip";
import Faqs from "./components/Faqs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Categories />
        <IntroCoders />
        <SingleCard />
        <AdmissionProcess />
        <div className="pt-[500px]">
          <LogosSlider />
        </div>

        <OurPeculiarCurriculum />
        <VerefyCertificate />
        <ScholorShip />
        <Faqs />
      </main>
      <Footer />
    </div>
  );
}
