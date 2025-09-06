'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type User = {
  id: string
  name: string
  email: string
} | null

type AuthContextType = {
  user: User
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  // Check if user is logged in on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
      setIsAuthenticated(true)
    }
  }, [])

  // Mock login function
  const login = async (email: string, password: string) => {
    // In a real app, this would be an API call
    const mockUser = {
      id: '1',
      name: 'Heritage User',
      email: email
    }
    
    setUser(mockUser)
    setIsAuthenticated(true)
    localStorage.setItem('user', JSON.stringify(mockUser))
  }

  // Mock register function
  const register = async (name: string, email: string, password: string) => {
    // In a real app, this would be an API call
    const mockUser = {
      id: '1',
      name: name,
      email: email
    }
    
    setUser(mockUser)
    setIsAuthenticated(true)
    localStorage.setItem('user', JSON.stringify(mockUser))
  }

  // Logout function
  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}