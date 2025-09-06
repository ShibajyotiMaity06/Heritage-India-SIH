"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

export default function ChallengesPage() {
  const [userCoins] = useState(150) // Mock user coins

  const challenges = {
    dance: [
      {
        id: 1,
        title: "Learn Basic Bharatanatyam Mudras",
        description: "Master 5 fundamental hand gestures used in classical Bharatanatyam dance",
        difficulty: "Beginner",
        coins: 50,
        duration: "30 mins",
        participants: 234,
        category: "Dance",
        state: "Tamil Nadu",
      },
      {
        id: 2,
        title: "Kuchipudi Storytelling Sequence",
        description: "Perform a 2-minute storytelling sequence combining dance and expressions",
        difficulty: "Intermediate",
        coins: 100,
        duration: "1 hour",
        participants: 89,
        category: "Dance",
        state: "Andhra Pradesh",
      },
    ],
    crafts: [
      {
        id: 3,
        title: "Create a Madhubani Painting",
        description: "Paint a traditional Madhubani artwork using natural colors and geometric patterns",
        difficulty: "Beginner",
        coins: 75,
        duration: "2 hours",
        participants: 156,
        category: "Crafts",
        state: "Bihar",
      },
      {
        id: 4,
        title: "Weave a Simple Khadi Pattern",
        description: "Learn basic khadi weaving techniques and create a small fabric sample",
        difficulty: "Advanced",
        coins: 150,
        duration: "3 hours",
        participants: 45,
        category: "Crafts",
        state: "Gujarat",
      },
    ],
    practices: [
      {
        id: 5,
        title: "Traditional Rangoli Design",
        description: "Create an intricate rangoli pattern using rice flour and natural colors",
        difficulty: "Beginner",
        coins: 40,
        duration: "45 mins",
        participants: 312,
        category: "Practices",
        state: "Karnataka",
      },
      {
        id: 6,
        title: "Ayurvedic Herb Garden Setup",
        description: "Plant and arrange a small collection of traditional Ayurvedic herbs",
        difficulty: "Intermediate",
        coins: 80,
        duration: "1.5 hours",
        participants: 67,
        category: "Practices",
        state: "Kerala",
      },
    ],
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800"
      case "Advanced":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-muted">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Heritage Challenges</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Participate in hands-on activities to learn traditional Indian arts, crafts, and practices. Complete
            challenges to earn coins and unlock exclusive rewards.
          </p>

          {/* User Stats */}
          <div className="flex justify-center items-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🪙</span>
              <span className="font-semibold text-primary">{userCoins} Coins</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏆</span>
              <span className="font-semibold text-primary">12 Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span className="font-semibold text-primary">Level 3</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="max-w-md mx-auto">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Progress to Level 4</span>
              <span>12/20 challenges</span>
            </div>
            <Progress value={60} className="h-2" />
          </div>
        </div>

        {/* Challenge Categories */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="all">All Challenges</TabsTrigger>
            <TabsTrigger value="dance">Dance</TabsTrigger>
            <TabsTrigger value="crafts">Crafts</TabsTrigger>
            <TabsTrigger value="practices">Practices</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...challenges.dance, ...challenges.crafts, ...challenges.practices].map((challenge) => (
                <ChallengeCard key={challenge.id} challenge={challenge} getDifficultyColor={getDifficultyColor} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="dance">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {challenges.dance.map((challenge) => (
                <ChallengeCard key={challenge.id} challenge={challenge} getDifficultyColor={getDifficultyColor} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="crafts">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {challenges.crafts.map((challenge) => (
                <ChallengeCard key={challenge.id} challenge={challenge} getDifficultyColor={getDifficultyColor} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="practices">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {challenges.practices.map((challenge) => (
                <ChallengeCard key={challenge.id} challenge={challenge} getDifficultyColor={getDifficultyColor} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function ChallengeCard({ challenge, getDifficultyColor }: any) {
  return (
    <Card className="border-2 border-accent/20 hover:border-accent/40 transition-colors group">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg text-primary group-hover:text-primary/80 transition-colors">
              {challenge.title}
            </CardTitle>
            <CardDescription className="mt-2">{challenge.description}</CardDescription>
          </div>
          <Badge variant="secondary" className="ml-2">
            {challenge.state}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Badge className={getDifficultyColor(challenge.difficulty)}>{challenge.difficulty}</Badge>
            <div className="flex items-center gap-1">
              <span className="text-lg">🪙</span>
              <span className="font-semibold text-primary">{challenge.coins}</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>⏱️ {challenge.duration}</span>
            <span>👥 {challenge.participants} participants</span>
          </div>

          <Button asChild className="w-full bg-primary hover:bg-primary/90">
            <Link href={`/challenges/${challenge.id}`}>Start Challenge</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
