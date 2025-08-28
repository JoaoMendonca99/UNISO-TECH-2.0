'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Heart, MessageCircle, Eye } from 'lucide-react'

const featuredIdeas = [
  {
    id: 1,
    title: "StudyBuddy - Grupos de Estudo Inteligentes",
    description: "Plataforma para formar grupos de estudo baseados em compatibilidade de horários, matérias e...",
    area: "Educação",
    tags: ["web", "ia", "educação"],
    votes: 31,
    comments: 12,
    status: "Aberto",
    author: {
      name: "João Santos",
      avatar: "/placeholder-avatar.jpg",
      initial: "J"
    }
  },
  {
    id: 2,
    title: "EcoApp - Sustentabilidade Universitária",
    description: "Aplicativo para promover práticas sustentáveis no campus, com sistema de pontuação e recompensa...",
    area: "Sustentabilidade",
    tags: ["mobile", "gamificação", "meio-ambiente"],
    votes: 23,
    comments: 8,
    status: "Aberto",
    author: {
      name: "Maria Silva",
      avatar: "/placeholder-avatar.jpg",
      initial: "M"
    }
  },
  {
    id: 3,
    title: "FoodShare UNISO",
    description: "Rede social para compartilhamento de refeições entre estudantes, reduzindo desperdício e...",
    area: "Social",
    tags: ["social", "economia", "mobile"],
    votes: 18,
    comments: 5,
    status: "Aberto",
    author: {
      name: "Ana Costa",
      avatar: "/placeholder-avatar.jpg",
      initial: "A"
    }
  }
]

export function FeaturedIdeas() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2 className="uniso-pill text-2xl md:text-3xl mb-4">
              Ideias em Destaque
            </h2>
          </motion.div>
        </div>

        {/* Featured ideas wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Gradient border wrapper */}
          <div className="uniso-gradient-light p-1 rounded-2xl">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8">
              {/* Subtitle */}
              <p className="text-center text-gray-600 dark:text-gray-300 mb-8 text-lg">
                Uma plataforma simples e intuitiva para conectar mentes criativas e transformar ideias em projetos reais.
              </p>

              {/* Ideas grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {featuredIdeas.map((idea, index) => (
                  <motion.div
                    key={idea.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="uniso-card group cursor-pointer"
                  >
                    {/* Area and status */}
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        {idea.area}
                      </span>
                      <span className="text-xs font-medium text-green-600 dark:text-green-400">
                        {idea.status}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                      {idea.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                      {idea.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {idea.tags.map((tag) => (
                        <span key={tag} className="uniso-tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      {/* Author */}
                      <div className="flex items-center space-x-2">
                        <Avatar className="h-8 w-8 uniso-avatar-ring">
                          <AvatarImage src={idea.author.avatar} alt={idea.author.name} />
                          <AvatarFallback className="bg-blue-600 text-white text-xs">
                            {idea.author.initial}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {idea.author.name}
                        </span>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center space-x-3 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Heart className="h-4 w-4" />
                          <span>{idea.votes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="h-4 w-4" />
                          <span>{idea.comments}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* View all button */}
              <div className="text-center">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8"
                >
                  Ver Todas
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

