import Hero from './components/Hero'
import Categories from './components/Categories'
import IntroCoders from './components/IntroCoders'
import SingleCard from './components/SingleCard'
import AdmissionProcess from './components/AdmissionProcess'
import LogosSlider from './components/LogosSlider'

export default function Home() {
  return (
    
    <main className="pt-16">
      <Hero />
      <Categories />
      <IntroCoders />
      <SingleCard />
      <AdmissionProcess />
      <LogosSlider />
    </main>
  )
}
