import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { CaseStudy } from "@/components/case-study"
import { Projects } from "@/components/projects"
import { Product } from "@/components/product"
import { Features } from "@/components/features"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <CaseStudy />
      <Projects />
      <Product />
      <Features />
      <Contact />
      <Footer />
    </main>
  )
}
