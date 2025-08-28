'use client'

import { useState, useEffect } from 'react'
import { Header } from '@/components/ui/header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { ArrowLeft, Plus, X, Eye, Heart, MessageCircle } from 'lucide-react'
import Link from 'next/link'

const areas = [
  "Educação",
  "Sustentabilidade", 
  "Social",
  "Tecnologia",
  "Carreira",
  "Saúde",
  "Entretenimento",
  "Negócios"
]

const necessidadesComuns = [
  "Programador Frontend",
  "Programador Backend",
  "Designer UI/UX",
  "Marketing Digital",
  "Análise de Dados",
  "Gestão de Projeto",
  "Redação de Conteúdo",
  "Pesquisa de Mercado"
]

export default function NovaIdeiaPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    area: '',
    tags: '',
    needs: ''
  })
  const [tagsList, setTagsList] = useState<string[]>([])
  const [needsList, setNeedsList] = useState<string[]>([])
  const [showPreview, setShowPreview] = useState(false)

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

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const addTag = () => {
    if (formData.tags.trim() && !tagsList.includes(formData.tags.trim())) {
      setTagsList(prev => [...prev, formData.tags.trim()])
      setFormData(prev => ({ ...prev, tags: '' }))
    }
  }

  const removeTag = (tag: string) => {
    setTagsList(prev => prev.filter(t => t !== tag))
  }

  const addNeed = () => {
    if (formData.needs.trim() && !needsList.includes(formData.needs.trim())) {
      setNeedsList(prev => [...prev, formData.needs.trim()])
      setFormData(prev => ({ ...prev, needs: '' }))
    }
  }

  const removeNeed = (need: string) => {
    setNeedsList(prev => prev.filter(n => n !== need))
  }

  const addCommonNeed = (need: string) => {
    if (!needsList.includes(need)) {
      setNeedsList(prev => [...prev, need])
    }
  }

  const isFormValid = () => {
    return formData.title.trim() && 
           formData.description.trim() && 
           formData.area && 
           tagsList.length > 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isFormValid()) {
      // Here would be the API call to create the idea
      console.log('Submitting idea:', {
        ...formData,
        tags: tagsList,
        needs: needsList
      })
      alert('Ideia criada com sucesso!')
    }
  }

  const previewIdea = {
    title: formData.title || "Título da sua ideia",
    description: formData.description || "Descrição da sua ideia aparecerá aqui...",
    area: formData.area || "Área",
    tags: tagsList.length > 0 ? tagsList : ["tag1", "tag2"],
    votes: 0,
    comments: 0,
    views: 0,
    status: "Aberto",
    author: {
      name: "Você",
      avatar: "/placeholder-avatar.jpg",
      initial: "V"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="container px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/explorar">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Nova Ideia</h1>
            <p className="text-gray-600 dark:text-gray-300">
              Compartilhe sua ideia com a comunidade UNISO Tech
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informações Básicas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="title">Título da Ideia *</Label>
                  <Input
                    id="title"
                    placeholder="Ex: App para conectar estudantes..."
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    maxLength={100}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    {formData.title.length}/100 caracteres
                  </p>
                </div>

                <div>
                  <Label htmlFor="description">Descrição *</Label>
                  <Textarea
                    id="description"
                    placeholder="Descreva sua ideia em detalhes. O que ela resolve? Como funciona? Qual o impacto esperado?"
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={6}
                    maxLength={1000}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    {formData.description.length}/1000 caracteres
                  </p>
                </div>

                <div>
                  <Label htmlFor="area">Área *</Label>
                  <Select value={formData.area} onValueChange={(value) => handleInputChange('area', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione uma área" />
                    </SelectTrigger>
                    <SelectContent>
                      {areas.map(area => (
                        <SelectItem key={area} value={area}>{area}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tags e Tecnologias</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="tags">Adicionar Tags *</Label>
                  <div className="flex gap-2">
                    <Input
                      id="tags"
                      placeholder="Ex: react, mobile, ia..."
                      value={formData.tags}
                      onChange={(e) => handleInputChange('tags', e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                    />
                    <Button type="button" onClick={addTag} size="icon">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  {tagsList.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {tagsList.map((tag) => (
                        <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                          {tag}
                          <button onClick={() => removeTag(tag)} className="ml-1">
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Necessidades da Equipe</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="needs">Que tipo de ajuda você precisa?</Label>
                  <div className="flex gap-2">
                    <Input
                      id="needs"
                      placeholder="Ex: Desenvolvedor React, Designer..."
                      value={formData.needs}
                      onChange={(e) => handleInputChange('needs', e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addNeed())}
                    />
                    <Button type="button" onClick={addNeed} size="icon">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  {needsList.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {needsList.map((need) => (
                        <Badge key={need} variant="outline" className="flex items-center gap-1">
                          {need}
                          <button onClick={() => removeNeed(need)} className="ml-1">
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <Label>Necessidades Comuns</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {necessidadesComuns.map((need) => (
                      <Button
                        key={need}
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => addCommonNeed(need)}
                        className="text-xs"
                        disabled={needsList.includes(need)}
                      >
                        <Plus className="h-3 w-3 mr-1" />
                        {need}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setShowPreview(!showPreview)}
                className="flex-1"
              >
                <Eye className="h-4 w-4 mr-2" />
                {showPreview ? 'Ocultar' : 'Visualizar'} Preview
              </Button>
              <Button 
                onClick={handleSubmit}
                disabled={!isFormValid()}
                className="flex-1 bg-blue-600 hover:bg-blue-700"
              >
                Publicar Ideia
              </Button>
            </div>
          </div>

          {/* Preview */}
          <div className={`${showPreview ? 'block' : 'hidden lg:block'}`}>
            <div className="sticky top-24">
              <h3 className="text-lg font-semibold mb-4">Preview do Card</h3>
              <Card className="group">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {previewIdea.area}
                    </Badge>
                    <Badge variant="outline" className="text-xs text-green-600 border-green-600">
                      {previewIdea.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">
                    {previewIdea.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                    {previewIdea.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {previewIdea.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="uniso-tag text-xs">
                        {tag}
                      </span>
                    ))}
                    {previewIdea.tags.length > 3 && (
                      <span className="uniso-tag text-xs">
                        +{previewIdea.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-2">
                    {/* Author */}
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-6 w-6 uniso-avatar-ring">
                        <AvatarImage src={previewIdea.author.avatar} alt={previewIdea.author.name} />
                        <AvatarFallback className="bg-blue-600 text-white text-xs">
                          {previewIdea.author.initial}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                        {previewIdea.author.name}
                      </span>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center space-x-3 text-xs text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Heart className="h-3 w-3" />
                        <span>{previewIdea.votes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="h-3 w-3" />
                        <span>{previewIdea.comments}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-3 w-3" />
                        <span>{previewIdea.views}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {needsList.length > 0 && (
                <Card className="mt-4">
                  <CardHeader>
                    <CardTitle className="text-sm">Necessidades da Equipe</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {needsList.map((need) => (
                        <Badge key={need} variant="outline" className="text-xs">
                          {need}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

