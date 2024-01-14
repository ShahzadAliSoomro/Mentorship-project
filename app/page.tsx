import Image from 'next/image'
import Hero from './components/Hero'
import Categories from './components/Categories'

export default function Home() {
  return (
    
    <main className="pt-16">
      <Hero />
      <Categories />
    </main>
  )
}
