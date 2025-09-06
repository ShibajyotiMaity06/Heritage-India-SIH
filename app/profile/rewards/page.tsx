"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function MyRewardsPage() {
  const [userCoins] = useState(150)

  // Mock user's redeemed rewards
  const myRewards = [
    {
      id: 1,
      title: "Warli Art Workshop",
      category: "Workshop",
      redeemedDate: "2024-02-15",
      status: "Completed",
      coins: 80,
      image: "/warli-art-workshop.jpg",
      details: "Completed 2-hour online workshop on traditional Warli painting techniques",
    },
    {
      id: 2,
      title: "Heritage Recipe Book",
      category: "Book",
      redeemedDate: "2024-02-10",
      status: "Delivered",
      coins: 90,
      image: "/indian-recipe-book.jpg",
      details: "Physical book delivered to registered address",
    },
    {
      id: 3,
      title: "Digital Heritage Badge - Bharatanatyam",
      category: "Digital",
      redeemedDate: "2024-02-08",
      status: "Active",
      coins: 50,
      image: "/bharatanatyam-digital-badge.jpg",
      details: "Digital badge displayed on profile",
    },
    {
      id: 4,
      title: "Kondapalli Toy Set",
      category: "Art",
      redeemedDate: "2024-02-05",
      status: "Shipped",
      coins: 120,
      image: "/kondapalli-wooden-toys.jpg",
      details: "Order shipped, tracking number: HI123456789",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800"
      case "Delivered":
        return "bg-blue-100 text-blue-800"
      case "Active":
        return "bg-purple-100 text-purple-800"
      case "Shipped":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const totalCoinsSpent = myRewards.reduce((sum, reward) => sum + reward.coins, 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-muted">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">My Rewards</h1>
          <p className="text-muted-foreground mb-6">Track your redeemed rewards and manage your heritage collection</p>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-2">🪙</div>
                <div className="text-2xl font-bold text-primary">{userCoins}</div>
                <div className="text-sm text-muted-foreground">Available Coins</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-2">🎁</div>
                <div className="text-2xl font-bold text-primary">{myRewards.length}</div>
                <div className="text-sm text-muted-foreground">Total Redeemed</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-2">💰</div>
                <div className="text-2xl font-bold text-primary">{totalCoinsSpent}</div>
                <div className="text-sm text-muted-foreground">Coins Spent</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-2">⭐</div>
                <div className="text-2xl font-bold text-primary">Gold</div>
                <div className="text-sm text-muted-foreground">Member Tier</div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Rewards List */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-6">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
                <TabsTrigger value="shipped">Shipped</TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                <div className="space-y-4">
                  {myRewards.map((reward) => (
                    <RewardItem key={reward.id} reward={reward} getStatusColor={getStatusColor} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="active">
                <div className="space-y-4">
                  {myRewards
                    .filter((r) => r.status === "Active")
                    .map((reward) => (
                      <RewardItem key={reward.id} reward={reward} getStatusColor={getStatusColor} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="completed">
                <div className="space-y-4">
                  {myRewards
                    .filter((r) => r.status === "Completed" || r.status === "Delivered")
                    .map((reward) => (
                      <RewardItem key={reward.id} reward={reward} getStatusColor={getStatusColor} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="shipped">
                <div className="space-y-4">
                  {myRewards
                    .filter((r) => r.status === "Shipped")
                    .map((reward) => (
                      <RewardItem key={reward.id} reward={reward} getStatusColor={getStatusColor} />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link href="/rewards">Browse More Rewards</Link>
                </Button>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/challenges">Earn More Coins</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Member Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-sm">Free shipping on art pieces</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-sm">Priority workshop booking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-sm">Exclusive member rewards</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-sm">10% bonus coins on challenges</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Achievement Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Art Collector</span>
                      <span>2/5</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "40%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Workshop Enthusiast</span>
                      <span>1/3</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "33%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

function RewardItem({ reward, getStatusColor }: any) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <img
            src={reward.image || "/placeholder.svg"}
            alt={reward.title}
            className="w-20 h-20 object-cover rounded-lg"
          />
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-semibold text-primary">{reward.title}</h3>
                <p className="text-sm text-muted-foreground">{reward.details}</p>
              </div>
              <Badge className={getStatusColor(reward.status)}>{reward.status}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>Redeemed: {reward.redeemedDate}</span>
                <span>Cost: {reward.coins} coins</span>
              </div>
              <Badge variant="secondary">{reward.category}</Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
