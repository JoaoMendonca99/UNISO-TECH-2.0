'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Lightbulb, Moon, Sun, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface HeaderProps {
  darkMode: boolean
  toggleDarkMode: () => void
}

export function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Lightbulb className="h-6 w-6 text-blue-600" />
          <span className="text-xl font-bold">UNISO Tech</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            href="/" 
            className="text-sm font-medium transition-colors hover:text-blue-600"
          >
            Início
          </Link>
          <Link 
            href="/explorar" 
            className="text-sm font-medium transition-colors hover:text-blue-600"
          >
            Explorar
          </Link>
          <Link 
            href="/nova-ideia" 
            className="text-sm font-medium transition-colors hover:text-blue-600"
          >
            Nova Ideia
          </Link>
        </nav>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Dark mode toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="h-9 w-9"
          >
            {darkMode ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
            <span className="sr-only">Toggle dark mode</span>
          </Button>

          {/* User menu or login */}
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                  <Avatar className="h-9 w-9 uniso-avatar-ring">
                    <AvatarImage src="/placeholder-avatar.jpg" alt="Estudante UNISO" />
                    <AvatarFallback className="bg-blue-600 text-white">E</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <div className="flex flex-col space-y-1 p-2">
                  <p className="text-sm font-medium leading-none">Estudante UNISO</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    estudante@uniso.br
                  </p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/perfil">Perfil</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/meus-projetos">Meus Projetos</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/configuracoes">Configurações</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>
                  Sair
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center space-x-2">
              <Button variant="ghost" onClick={() => setIsLoggedIn(true)}>
                Entrar
              </Button>
              <Button onClick={() => setIsLoggedIn(true)}>
                Cadastrar
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

