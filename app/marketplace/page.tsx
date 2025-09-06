"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function MarketplacePage() {
  const [cart, setCart] = useState<number[]>([])
  const [likedItems, setLikedItems] = useState<number[]>([])
  const [userCoins, setUserCoins] = useState(2500) // User's current coin balance
  const { toast } = useToast()

  const [products] = useState([
    {
      id: 1,
      title: "Handwoven Banarasi Silk Saree",
      artist: "Meera Textiles",
      artistLocation: "Varanasi, Uttar Pradesh",
      price: 15000,
      originalPrice: 18000,
      coinPrice: 150, // Added coin redemption price
      rating: 4.8,
      reviews: 24,
      image: "/marketplace/banarasi-saree.jpg",
      category: "Textiles",
      inStock: true,
      featured: true,
    },
    {
      id: 2,
      title: "Traditional Madhubani Painting",
      artist: "Sita Devi",
      artistLocation: "Madhubani, Bihar",
      price: 3500,
      originalPrice: 4000,
      coinPrice: 35,
      rating: 4.9,
      reviews: 18,
      image: "/marketplace/madhubani-art.jpg",
      category: "Paintings",
      inStock: true,
      featured: true,
    },
    {
      id: 3,
      title: "Kondapalli Wooden Toy Set",
      artist: "Lakshmi Crafts",
      artistLocation: "Kondapalli, Andhra Pradesh",
      price: 2200,
      originalPrice: 2500,
      coinPrice: 22,
      rating: 4.7,
      reviews: 31,
      image: "/marketplace/kondapalli-toys.jpg",
      category: "Toys & Crafts",
      inStock: true,
      featured: false,
    },
    {
      id: 4,
      title: "Blue Pottery Dinner Set",
      artist: "Rajesh Pottery",
      artistLocation: "Jaipur, Rajasthan",
      price: 4800,
      originalPrice: 5500,
      coinPrice: 48,
      rating: 4.6,
      reviews: 15,
      image: "/marketplace/blue-pottery.jpg",
      category: "Pottery",
      inStock: false,
      featured: false,
    },
    {
      id: 5,
      title: "Kalamkari Wall Hanging",
      artist: "Ravi Kumar Arts",
      artistLocation: "Srikalahasti, Andhra Pradesh",
      price: 2800,
      originalPrice: 3200,
      coinPrice: 28,
      rating: 4.8,
      reviews: 22,
      image: "/marketplace/kalamkari-wall.jpg",
      category: "Textiles",
      inStock: true,
      featured: true,
    },
    {
      id: 6,
      title: "Warli Art Canvas",
      artist: "Tribal Art Collective",
      artistLocation: "Thane, Maharashtra",
      price: 1800,
      originalPrice: 2000,
      coinPrice: 18,
      rating: 4.5,
      reviews: 12,
      image: "/marketplace/warli-canvas.jpg",
      category: "Paintings",
      inStock: true,
      featured: false,
    },
  ])

  const [featuredArtists] = useState([
    {
      id: 1,
      name: "Sita Devi",
      location: "Madhubani, Bihar",
      specialty: "Madhubani Paintings",
      experience: "25+ years",
      products: 12,
      rating: 4.9,
      avatar: "/artists/sita-devi.jpg",
      verified: true,
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Jaipur, Rajasthan",
      specialty: "Blue Pottery",
      experience: "30+ years",
      products: 8,
      rating: 4.7,
      avatar: "/artists/rajesh-kumar.jpg",
      verified: true,
    },
    {
      id: 3,
      name: "Meera Textiles",
      location: "Varanasi, Uttar Pradesh",
      specialty: "Banarasi Silk",
      experience: "40+ years",
      products: 15,
      rating: 4.8,
      avatar: "/artists/meera-textiles.jpg",
      verified: true,
    },
  ])

  const addToCart = (productId: number) => {
    if (!cart.includes(productId)) {
      setCart([...cart, productId])
      const product = products.find((p) => p.id === productId)
      toast({
        title: "Added to Cart! 🛒",
        description: `${product?.title} has been added to your cart.`,
        duration: 3000,
      })
    }
  }

  const toggleLike = (productId: number) => {
    if (likedItems.includes(productId)) {
      setLikedItems(likedItems.filter((id) => id !== productId))
      toast({
        title: "Removed from Favorites",
        description: "Item removed from your favorites.",
        duration: 2000,
      })
    } else {
      setLikedItems([...likedItems, productId])
      toast({
        title: "Added to Favorites! ❤️",
        description: "Item added to your favorites.",
        duration: 2000,
      })
    }
  }

  const redeemWithCoins = (productId: number) => {
    const product = products.find((p) => p.id === productId)
    if (product && userCoins >= product.coinPrice) {
      setUserCoins(userCoins - product.coinPrice)
      toast({
        title: "Redeemed Successfully! 🎉",
        description: `You've redeemed ${product.title} for ${product.coinPrice} coins!`,
        duration: 4000,
      })
    } else {
      toast({
        title: "Insufficient Coins",
        description: `You need ${product?.coinPrice} coins to redeem this item.`,
        variant: "destructive",
        duration: 3000,
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-muted">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Heritage Marketplace</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover authentic handmade crafts and artworks directly from master artisans across India. Every purchase
            supports traditional craftsmanship and cultural preservation.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
            <span className="text-2xl">🪙</span>
            <span className="font-semibold text-primary">{userCoins} Heritage Coins</span>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <Input placeholder="Search products..." className="max-w-sm" />
          <Select>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="textiles">Textiles</SelectItem>
              <SelectItem value="paintings">Paintings</SelectItem>
              <SelectItem value="pottery">Pottery</SelectItem>
              <SelectItem value="toys">Toys & Crafts</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Price Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Prices</SelectItem>
              <SelectItem value="under-2000">Under ₹2,000</SelectItem>
              <SelectItem value="2000-5000">₹2,000 - ₹5,000</SelectItem>
              <SelectItem value="5000-10000">₹5,000 - ₹10,000</SelectItem>
              <SelectItem value="above-10000">Above ₹10,000</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="State" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All States</SelectItem>
              <SelectItem value="bihar">Bihar</SelectItem>
              <SelectItem value="rajasthan">Rajasthan</SelectItem>
              <SelectItem value="uttar-pradesh">Uttar Pradesh</SelectItem>
              <SelectItem value="andhra-pradesh">Andhra Pradesh</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Featured Artists */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Featured Artisans</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredArtists.map((artist) => (
              <Card key={artist.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src={artist.avatar || "/placeholder.svg"} alt={artist.name} />
                    <AvatarFallback>
                      {artist.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <h3 className="font-semibold text-primary">{artist.name}</h3>
                    {artist.verified && <Badge variant="secondary">Verified</Badge>}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{artist.location}</p>
                  <p className="text-sm font-medium mb-3">{artist.specialty}</p>
                  <div className="flex justify-center items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span>{artist.experience}</span>
                    <span>⭐ {artist.rating}</span>
                    <span>{artist.products} products</span>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    View Profile
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Authentic Handmade Products</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Grid View
              </Button>
              <Button variant="outline" size="sm">
                List View
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card
                key={product.id}
                className={`hover:shadow-lg transition-shadow ${product.featured ? "ring-2 ring-primary/20" : ""}`}
              >
                <div className="relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-t-lg transition-transform hover:scale-105"
                  />
                  {product.featured && <Badge className="absolute top-2 left-2 bg-primary">Featured</Badge>}
                  {!product.inStock && (
                    <Badge variant="destructive" className="absolute top-2 right-2">
                      Out of Stock
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="mb-3">
                    <h3 className="font-semibold text-primary mb-1">{product.title}</h3>
                    <p className="text-sm text-muted-foreground">by {product.artist}</p>
                    <p className="text-xs text-muted-foreground">{product.artistLocation}</p>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">{product.category}</Badge>
                    <div className="flex items-center gap-1 text-sm">
                      <span>⭐</span>
                      <span>{product.rating}</span>
                      <span className="text-muted-foreground">({product.reviews})</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-primary">₹{product.price.toLocaleString()}</span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-muted-foreground line-through ml-2">
                          ₹{product.originalPrice.toLocaleString()}
                        </span>
                      )}
                      <div className="text-sm text-secondary font-medium mt-1">🪙 {product.coinPrice} coins</div>
                    </div>
                  </div>

                  <div className="flex gap-2 mb-2">
                    <Button
                      className="flex-1 bg-primary hover:bg-primary/90"
                      disabled={!product.inStock}
                      onClick={() => addToCart(product.id)}
                    >
                      {product.inStock ? "Add to Cart" : "Out of Stock"}
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => toggleLike(product.id)}
                      className={likedItems.includes(product.id) ? "bg-red-50 text-red-500 border-red-200" : ""}
                    >
                      {likedItems.includes(product.id) ? "❤️" : "🤍"}
                    </Button>
                  </div>

                  <Button
                    variant="secondary"
                    className="w-full bg-secondary hover:bg-secondary/90"
                    disabled={!product.inStock || userCoins < product.coinPrice}
                    onClick={() => redeemWithCoins(product.id)}
                  >
                    {userCoins >= product.coinPrice
                      ? `Redeem with ${product.coinPrice} coins`
                      : `Need ${product.coinPrice} coins`}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-12 bg-card/50 rounded-lg">
          <h2 className="text-3xl font-bold text-foreground mb-4">Are You an Artisan?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our marketplace and showcase your traditional crafts to heritage enthusiasts worldwide. We provide the
            platform, you bring the artistry.
          </p>
          <Button className="bg-primary hover:bg-primary/90">Become a Seller</Button>
        </div>
      </div>
      <Toaster />
    </div>
  )
}
