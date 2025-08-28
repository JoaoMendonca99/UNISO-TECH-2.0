'use client'

import { useState, useEffect } from 'react'
import { Header } from '@/components/ui/header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Search, Filter, Heart, MessageCircle, Eye, Plus } from 'lucide-react'

// Mock data for ideas
const allIdeas = [
  {
    id: 1,
    title: "StudyBuddy - Grupos de Estudo Inteligentes",
    description: "Plataforma para formar grupos de estudo baseados em compatibilidade de horários, matérias e preferências de aprendizado. Utiliza algoritmos de matching para conectar estudantes com objetivos similares.",
    area: "Educação",
    tags: ["web", "ia", "educação", "algoritmos"],
    votes: 31,
    comments: 12,
    views: 156,
    status: "Aberto",
    author: {
      name: "João Santos",
      avatar: "/placeholder-avatar.jpg",
      initial: "J"
    },
    createdAt: "2025-01-15"
  },
  {
    id: 2,
    title: "EcoApp - Sustentabilidade Universitária",
    description: "Aplicativo para promover práticas sustentáveis no campus, com sistema de pontuação e recompensas. Inclui desafios ecológicos, tracking de pegada de carbono e marketplace de produtos sustentáveis.",
    area: "Sustentabilidade",
    tags: ["mobile", "gamificação", "meio-ambiente", "react-native"],
    votes: 23,
    comments: 8,
    views: 89,
    status: "Aberto",
    author: {
      name: "Maria Silva",
      avatar: "/placeholder-avatar.jpg",
      initial: "M"
    },
    createdAt: "2025-01-20"
  },
  {
    id: 3,
    title: "FoodShare UNISO",
    description: "Rede social para compartilhamento de refeições entre estudantes, reduzindo desperdício e promovendo economia colaborativa. Sistema de avaliações e chat integrado.",
    area: "Social",
    tags: ["social", "economia", "mobile", "chat"],
    votes: 18,
    comments: 5,
    views: 67,
    status: "Aberto",
    author: {
      name: "Ana Costa",
      avatar: "/placeholder-avatar.jpg",
      initial: "A"
    },
    createdAt: "2025-01-25"
  },
  {
    id: 4,
    title: "Campus Navigator AR",
    description: "Aplicativo de realidade aumentada para navegação no campus universitário. Inclui localização de salas, eventos, serviços e informações em tempo real sobre ocupação de espaços.",
    area: "Tecnologia",
    tags: ["ar", "mobile", "navegação", "unity"],
    votes: 15,
    comments: 7,
    views: 45,
    status: "Aberto",
    author: {
      name: "Pedro Lima",
      avatar: "/placeholder-avatar.jpg",
      initial: "P"
    },
    createdAt: "2025-01-28"
  },
  {
    id: 5,
    title: "MentorMatch",
    description: "Plataforma para conectar estudantes com mentores da indústria. Sistema de matching baseado em interesses, carreira desejada e disponibilidade para sessões de mentoria.",
    area: "Carreira",
    tags: ["web", "mentoria", "networking", "carreira"],
    votes: 27,
    comments: 14,
    views: 112,
    status: "Aberto",
    author: {
      name: "Carlos Oliveira",
      avatar: "/placeholder-avatar.jpg",
      initial: "C"
    },
    createdAt: "2025-01-10"
  },
  {
    id: 6,
    title: "SmartLibrary",
    description: "Sistema inteligente para gerenciamento de biblioteca universitária com reserva de espaços, recomendação de livros por IA e sistema de estudo colaborativo.",
    area: "Educação",
    tags: ["web", "ia", "biblioteca", "recomendação"],
    votes: 12,
    comments: 3,
    views: 34,
    status: "Aberto",
    author: {
      name: "Lucia Santos",
      avatar: "/placeholder-avatar.jpg",
      initial: "L"
    },
    createdAt: "2025-02-01"
  }
]

const areas = ["Todas", "Educação", "Sustentabilidade", "Social", "Tecnologia", "Carreira"]
const sortOptions = [
  { value: "relevance", label: "Relevância" },
  { value: "votes", label: "Mais Votados" },
  { value: "comments", label: "Mais Comentados" },
  { value: "recent", label: "Mais Recentes" }
]

export default function ExplorarPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedArea, setSelectedArea] = useState("Todas")
  const [sortBy, setSortBy] = useState("relevance")
  const [filteredIdeas, setFilteredIdeas] = useState(allIdeas)

  // Initialize dark mode
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

  // Filter and sort ideas
  useEffect(() => {
    let filtered = allIdeas.filter(idea => {
      const matchesSearch = idea.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           idea.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           idea.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesArea = selectedArea === "Todas" || idea.area === selectedArea
      
      return matchesSearch && matchesArea
    })

    // Sort ideas
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "votes":
          return b.votes - a.votes
        case "comments":
          return b.comments - a.comments
        case "recent":
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        case "relevance":
        default:
          // Relevance = votes * 2 + comments
          const scoreA = a.votes * 2 + a.comments
          const scoreB = b.votes * 2 + b.comments
          return scoreB - scoreA
      }
    })

    setFilteredIdeas(filtered)
  }, [searchTerm, selectedArea, sortBy])

  return (
    <div className="min-h-screen bg-background">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="container px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Explorar Projetos</h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Descubra ideias incríveis e encontre projetos para colaborar
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Buscar por título, descrição ou tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Area Filter */}
            <div>
              <Select value={selectedArea} onValueChange={setSelectedArea}>
                <SelectTrigger>
                  <SelectValue placeholder="Área" />
                </SelectTrigger>
                <SelectContent>
                  {areas.map(area => (
                    <SelectItem key={area} value={area}>{area}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Sort */}
            <div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600 dark:text-gray-300">
            {filteredIdeas.length} projeto{filteredIdeas.length !== 1 ? 's' : ''} encontrado{filteredIdeas.length !== 1 ? 's' : ''}
          </p>
          
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Nova Ideia
          </Button>
        </div>

        {/* Ideas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIdeas.map((idea) => (
            <Card key={idea.id} className="group hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {idea.area}
                  </Badge>
                  <Badge variant="outline" className="text-xs text-green-600 border-green-600">
                    {idea.status}
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                  {idea.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                  {idea.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {idea.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="uniso-tag text-xs">
                      {tag}
                    </span>
                  ))}
                  {idea.tags.length > 3 && (
                    <span className="uniso-tag text-xs">
                      +{idea.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-2">
                  {/* Author */}
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-6 w-6 uniso-avatar-ring">
                      <AvatarImage src={idea.author.avatar} alt={idea.author.name} />
                      <AvatarFallback className="bg-blue-600 text-white text-xs">
                        {idea.author.initial}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                      {idea.author.name}
                    </span>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center space-x-3 text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Heart className="h-3 w-3" />
                      <span>{idea.votes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="h-3 w-3" />
                      <span>{idea.comments}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-3 w-3" />
                      <span>{idea.views}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        {filteredIdeas.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Carregar Mais Projetos
            </Button>
          </div>
        )}

        {/* No Results */}
        {filteredIdeas.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Nenhum projeto encontrado</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Tente ajustar os filtros ou criar um novo projeto
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              Criar Nova Ideia
            </Button>
          </div>
        )}
      </main>
    </div>
  )
}

