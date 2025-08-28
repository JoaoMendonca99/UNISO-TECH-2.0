'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Users, TrendingUp } from 'lucide-react'

const steps = [
  {
    icon: Lightbulb,
    title: "Publique Projetos ou Ideias",
    description: "Mostre o que você quer desenvolver.",
    details: "Descreva o objetivo e diga de quais habilidades precisa (programador, designer, marketing, etc.).",
    color: "blue"
  },
  {
    icon: Users,
    title: "Participe de Projetos Existentes",
    description: "Explore ideias já cadastradas por outros alunos.",
    details: "Encontre oportunidades de colaborar com suas habilidades e entrar em uma equipe.",
    color: "green"
  },
  {
    icon: TrendingUp,
    title: "Ganhe Reconhecimento",
    description: "Projetos mais votados recebem destaque na comunidade UNISO.",
    details: "Mais visibilidade significa mais chances de apoio, mentoria e novos integrantes.",
    color: "purple"
  }
]

export function HowItWorks() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
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
              Como Funciona
            </h2>
          </motion.div>
        </div>

        {/* How it works wrapper */}
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
              <p className="text-center text-gray-600 dark:text-gray-300 mb-12 text-lg">
                Uma plataforma simples e intuitiva para conectar mentes criativas e transformar ideias em projetos reais.
              </p>

              {/* Steps grid */}
              <div className="grid md:grid-cols-3 gap-8">
                {steps.map((step, index) => {
                  const Icon = step.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="text-center group"
                    >
                      {/* Icon */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className={`
                          w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center
                          ${step.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30' : ''}
                          ${step.color === 'green' ? 'bg-green-100 dark:bg-green-900/30' : ''}
                          ${step.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/30' : ''}
                        `}
                      >
                        <Icon className={`
                          h-8 w-8
                          ${step.color === 'blue' ? 'text-blue-600 dark:text-blue-400' : ''}
                          ${step.color === 'green' ? 'text-green-600 dark:text-green-400' : ''}
                          ${step.color === 'purple' ? 'text-purple-600 dark:text-purple-400' : ''}
                        `} />
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className={`
                        text-base font-medium mb-3
                        ${step.color === 'blue' ? 'text-blue-600 dark:text-blue-400' : ''}
                        ${step.color === 'green' ? 'text-green-600 dark:text-green-400' : ''}
                        ${step.color === 'purple' ? 'text-purple-600 dark:text-purple-400' : ''}
                      `}>
                        {step.description}
                      </p>

                      {/* Details */}
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {step.details}
                      </p>

                      {/* Step number */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                        viewport={{ once: true }}
                        className={`
                          w-8 h-8 mx-auto mt-6 rounded-full flex items-center justify-center text-white font-bold text-sm
                          ${step.color === 'blue' ? 'bg-blue-600' : ''}
                          ${step.color === 'green' ? 'bg-green-600' : ''}
                          ${step.color === 'purple' ? 'bg-purple-600' : ''}
                        `}
                      >
                        {index + 1}
                      </motion.div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

