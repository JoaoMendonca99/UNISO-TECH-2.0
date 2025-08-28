'use client'

import { useState, useEffect } from 'react'
import { Header } from '@/components/ui/header'
import { HeroSection } from '@/components/ui/hero-section'
import { FeaturedIdeas } from '@/components/ui/featured-ideas'
import { HowItWorks } from '@/components/ui/how-it-works'
import { CTASection } from '@/components/ui/cta-section'
import { ScrollSection } from '@/components/ui/scroll-section'
import { useSmoothScroll } from '@/hooks/use-smooth-scroll'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  // Initialize smooth scrolling
  useSmoothScroll()

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main>
        <ScrollSection>
          <HeroSection />
        </ScrollSection>
        
        <ScrollSection>
          <FeaturedIdeas />
        </ScrollSection>
        
        <ScrollSection>
          <HowItWorks />
        </ScrollSection>
        
        <ScrollSection>
          <CTASection />
        </ScrollSection>
      </main>
      
      <footer className="bg-gray-900 text-white py-12">
        <div className="container px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">UNISO Tech</h3>
              <p className="text-gray-400 text-sm">
                Conectando mentes criativas para transformar ideias em projetos reais.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Navegação</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/" className="hover:text-white transition-colors">Início</a></li>
                <li><a href="/explorar" className="hover:text-white transition-colors">Explorar</a></li>
                <li><a href="/nova-ideia" className="hover:text-white transition-colors">Nova Ideia</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Suporte</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/sobre" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="/contato" className="hover:text-white transition-colors">Contato</a></li>
                <li><a href="/ajuda" className="hover:text-white transition-colors">Ajuda</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">UNISO</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="https://uniso.br" className="hover:text-white transition-colors">Site Oficial</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Portal do Aluno</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 UNISO Tech. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
