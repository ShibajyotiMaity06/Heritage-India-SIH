"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"

export default function RewardsPage() {
  const [userCoins] = useState(150) // Mock user coins
  const [redeemedRewards, setRedeemedRewards] = useState<number[]>([])

  const rewards = {
    art: [
      {
        id: 1,
        title: "Handcrafted Madhubani Painting",
        description: "Authentic Madhubani artwork on handmade paper by Bihar artisans",
        coins: 200,
        category: "Art",
        image: "/madhubani-painting.jpg",
        availability: "Limited - 5 left",
        artisan: "Sita Devi, Bihar",
        details: "12x16 inch traditional Madhubani painting featuring fish and lotus motifs",
      },
      {
        id: 2,
        title: "Kalamkari Wall Hanging",
        description: "Hand-painted cotton textile with natural dyes from Andhra Pradesh",
        coins: 300,
        category: "Art",
        image: "/kalamkari-textile.jpg",
        availability: "In Stock",
        artisan: "Ravi Kumar, Andhra Pradesh",
        details: "18x24 inch cotton fabric with traditional tree of life design",
      },
      {
        id: 3,
        title: "Kondapalli Toy Set",
        description: "Set of 5 traditional wooden toys painted with natural colors",
        coins: 120,
        category: "Art",
        image: "/kondapalli-wooden-toys.jpg",
        availability: "In Stock",
        artisan: "Lakshmi Crafts Collective",
        details: "Includes elephant, peacock, dancer, musician, and bullock cart figures",
      },
    ],
    workshops: [
      {
        id: 4,
        title: "Online Bharatanatyam Workshop",
        description: "3-hour intensive workshop with renowned classical dance guru",
        coins: 100,
        category: "Workshop",
        image: "/bharatanatyam-dance-class.jpg",
        availability: "Next session: March 15",
        instructor: "Guru Padma Subrahmanyam",
        details: "Learn basic positions, mudras, and a simple choreography sequence",
      },
      {
        id: 5,
        title: "Pottery Making Masterclass",
        description: "Learn traditional pottery techniques from master craftsmen",
        coins: 150,
        category: "Workshop",
        image: "/pottery-making-class.jpg",
        availability: "Next session: March 20",
        instructor: "Rajesh Pottery Studio, Rajasthan",
        details: "4-hour hands-on session including clay preparation and wheel throwing",
      },
      {
        id: 6,
        title: "Warli Art Workshop",
        description: "Create authentic Warli paintings using traditional methods",
        coins: 80,
        category: "Workshop",
        image: "/warli-art-painting.jpg",
        availability: "Available anytime",
        instructor: "Tribal Art Foundation",
        details: "2-hour online workshop with art supplies kit included",
      },
    ],
    experiences: [
      {
        id: 7,
        title: "Heritage Village Tour - Rajasthan",
        description: "2-day guided tour of traditional Rajasthani villages and crafts",
        coins: 500,
        category: "Experience",
        image: "/rajasthan-village-tour.jpg",
        availability: "Bookings open",
        provider: "Heritage Trails India",
        details: "Includes accommodation, meals, and hands-on craft experiences",
      },
      {
        id: 8,
        title: "Temple Architecture Walk - Tamil Nadu",
        description: "Expert-guided tour of ancient Chola temples and their significance",
        coins: 250,
        category: "Experience",
        image: "/tamil-nadu-temple-architecture.jpg",
        availability: "Weekend slots available",
        provider: "Cultural Heritage Society",
        details: "Full-day tour covering 3 UNESCO World Heritage temples",
      },
      {
        id: 9,
        title: "Backwater Craft Experience - Kerala",
        description: "Learn traditional boat making and coir weaving techniques",
        coins: 350,
        category: "Experience",
        image: "/kerala-backwater-crafts.jpg",
        availability: "Limited slots",
        provider: "Kerala Artisan Collective",
        details: "3-day immersive experience in traditional Kerala crafts",
      },
    ],
    collectibles: [
      {
        id: 10,
        title: "Heritage India Digital Badge Collection",
        description: "Exclusive NFT badges representing different Indian art forms",
        coins: 50,
        category: "Digital",
        image: "/digital-heritage-badge.jpg",
        availability: "Unlimited",
        details: "Collectible digital badges for your profile showcase",
      },
      {
        id: 11,
        title: "Vintage Postcard Set",
        description: "Reproduction of 1950s postcards featuring Indian monuments",
        coins: 75,
        category: "Collectible",
        image: "/vintage-india-postcards.jpg",
        availability: "In Stock",
        details: "Set of 20 high-quality reproduction postcards with historical information",
      },
      {
        id: 12,
        title: "Heritage Recipe Book",
        description: "Traditional recipes from different Indian states with cultural context",
        coins: 90,
        category: "Book",
        image: "/indian-recipe-book.jpg",
        availability: "In Stock",
        details: "150-page book with 50 authentic recipes and cultural stories",
      },
    ],
  }

  const handleRedeem = (rewardId: number, cost: number) => {
    if (userCoins >= cost) {
      setRedeemedRewards([...redeemedRewards, rewardId])
      // In real app, update user coins and process redemption
      alert(`Reward redeemed successfully! You'll receive confirmation details via email.`)
    }
  }

  const canAfford = (cost: number) => userCoins >= cost
  const isRedeemed = (rewardId: number) => redeemedRewards.includes(rewardId)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-muted">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Heritage Rewards</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Redeem your earned coins for authentic Indian art, exclusive workshops, cultural experiences, and unique
            collectibles.
          </p>

          {/* User Coins Display */}
          <div className="flex justify-center items-center gap-6 mb-8">
            <div className="flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full">
              <span className="text-3xl">🪙</span>
              <div>
                <div className="font-bold text-2xl text-primary">{userCoins}</div>
                <div className="text-sm text-muted-foreground">Available Coins</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎁</span>
              <div>
                <div className="font-bold text-xl text-primary">{redeemedRewards.length}</div>
                <div className="text-sm text-muted-foreground">Redeemed</div>
              </div>
            </div>
          </div>

          <Alert className="max-w-2xl mx-auto">
            <AlertDescription>
              Earn more coins by completing heritage challenges, participating in workshops, and engaging with the
              community.{" "}
              <Link href="/challenges" className="text-primary hover:underline">
                View Challenges
              </Link>
            </AlertDescription>
          </Alert>
        </div>

        {/* Reward Categories */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="all">All Rewards</TabsTrigger>
            <TabsTrigger value="art">Artworks</TabsTrigger>
            <TabsTrigger value="workshops">Workshops</TabsTrigger>
            <TabsTrigger value="experiences">Experiences</TabsTrigger>
            <TabsTrigger value="collectibles">Collectibles</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...rewards.art, ...rewards.workshops, ...rewards.experiences, ...rewards.collectibles].map((reward) => (
                <RewardCard
                  key={reward.id}
                  reward={reward}
                  canAfford={canAfford(reward.coins)}
                  isRedeemed={isRedeemed(reward.id)}
                  onRedeem={() => handleRedeem(reward.id, reward.coins)}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="art">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rewards.art.map((reward) => (
                <RewardCard
                  key={reward.id}
                  reward={reward}
                  canAfford={canAfford(reward.coins)}
                  isRedeemed={isRedeemed(reward.id)}
                  onRedeem={() => handleRedeem(reward.id, reward.coins)}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="workshops">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rewards.workshops.map((reward) => (
                <RewardCard
                  key={reward.id}
                  reward={reward}
                  canAfford={canAfford(reward.coins)}
                  isRedeemed={isRedeemed(reward.id)}
                  onRedeem={() => handleRedeem(reward.id, reward.coins)}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="experiences">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rewards.experiences.map((reward) => (
                <RewardCard
                  key={reward.id}
                  reward={reward}
                  canAfford={canAfford(reward.coins)}
                  isRedeemed={isRedeemed(reward.id)}
                  onRedeem={() => handleRedeem(reward.id, reward.coins)}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="collectibles">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rewards.collectibles.map((reward) => (
                <RewardCard
                  key={reward.id}
                  reward={reward}
                  canAfford={canAfford(reward.coins)}
                  isRedeemed={isRedeemed(reward.id)}
                  onRedeem={() => handleRedeem(reward.id, reward.coins)}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function RewardCard({ reward, canAfford, isRedeemed, onRedeem }: any) {
  return (
    <Card
      className={`border-2 transition-colors ${
        isRedeemed
          ? "border-green-200 bg-green-50"
          : canAfford
            ? "border-accent/20 hover:border-accent/40"
            : "border-gray-200 opacity-75"
      }`}
    >
      <CardHeader>
        <div className="aspect-square bg-gradient-to-br from-secondary/20 to-accent/20 rounded-lg mb-4 overflow-hidden">
          <img src={reward.image || "/placeholder.svg"} alt={reward.title} className="w-full h-full object-cover" />
        </div>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg text-primary">{reward.title}</CardTitle>
            <CardDescription className="mt-2">{reward.description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Badge variant="secondary">{reward.category}</Badge>
            <div className="flex items-center gap-1">
              <span className="text-lg">🪙</span>
              <span className="font-bold text-primary">{reward.coins}</span>
            </div>
          </div>

          <div className="text-sm text-muted-foreground">
            <div className="mb-1">📍 {reward.availability}</div>
            {reward.artisan && <div>👨‍🎨 {reward.artisan}</div>}
            {reward.instructor && <div>👨‍🏫 {reward.instructor}</div>}
            {reward.provider && <div>🏢 {reward.provider}</div>}
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full bg-transparent">
                View Details
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{reward.title}</DialogTitle>
                <DialogDescription>{reward.description}</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <img
                  src={reward.image || "/placeholder.svg"}
                  alt={reward.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <p className="text-sm">{reward.details}</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Cost: {reward.coins} coins</span>
                  <Badge variant="secondary">{reward.availability}</Badge>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {isRedeemed ? (
            <Button disabled className="w-full bg-green-600">
              ✓ Redeemed
            </Button>
          ) : (
            <Button
              onClick={onRedeem}
              disabled={!canAfford}
              className={`w-full ${canAfford ? "bg-primary hover:bg-primary/90" : "bg-gray-400"}`}
            >
              {canAfford ? "Redeem Now" : "Insufficient Coins"}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
