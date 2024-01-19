import Hero from './components/Hero'
import Categories from './components/Categories'
import IntroCoders from './components/IntroCoders'
import SingleCard from './components/SingleCard'
import AdmissionProcess from './components/AdmissionProcess'
import LogosSlider from './components/LogosSlider'
import OurPeculiarCurriculum from './components/OurPeculiarCurriculum'
import VerefyCertificate from './components/VerefyCertificate'
import ScholorShip from './components/ScholorShip'

export default function Home() {
  return (
    
    <main className="pt-16">
      <Hero />
      <Categories />
      <IntroCoders />
      <SingleCard />
      <AdmissionProcess />
      <LogosSlider />
      <OurPeculiarCurriculum />
      <VerefyCertificate />
      <ScholorShip />
    </main>
  )
}
