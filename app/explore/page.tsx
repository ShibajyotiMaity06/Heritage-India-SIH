import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Star, Bookmark } from "lucide-react"

export default function ExplorePage() {
  const featuredContent = [
    {
      id: 1,
      type: "Heritage Site",
      title: "Hampi - The Vijayanagara Empire",
      description: "Explore the magnificent ruins of the Vijayanagara Empire, a UNESCO World Heritage Site",
      location: "Karnataka",
      rating: 4.8,
      image: "/hampi-ruins.jpg",
      tags: ["Architecture", "History", "UNESCO"],
      difficulty: "Easy",
    },
    {
      id: 2,
      type: "Art Form",
      title: "Tanjore Painting Workshop",
      description: "Learn the traditional art of Tanjore painting with gold foil and precious stones",
      location: "Tamil Nadu",
      rating: 4.9,
      image: "/tanjore-painting.jpg",
      tags: ["Painting", "Traditional Art", "Workshop"],
      difficulty: "Intermediate",
    },
    {
      id: 3,
      type: "Festival",
      title: "Pushkar Camel Fair",
      description: "Experience the vibrant culture and traditions at Rajasthan's famous camel fair",
      location: "Rajasthan",
      rating: 4.7,
      image: "/pushkar-fair.jpg",
      tags: ["Festival", "Culture", "Tradition"],
      difficulty: "Easy",
    },
    {
      id: 4,
      type: "Craft",
      title: "Pashmina Weaving Experience",
      description: "Discover the intricate art of Pashmina weaving in the valleys of Kashmir",
      location: "Kashmir",
      rating: 4.8,
      image: "/pashmina-weaving.jpg",
      tags: ["Textiles", "Handicraft", "Luxury"],
      difficulty: "Advanced",
    },
    {
      id: 5,
      type: "Cuisine",
      title: "Traditional Thali Cooking",
      description: "Master the art of preparing authentic regional thalis from different states",
      location: "Multiple States",
      rating: 4.6,
      image: "/traditional-thali.jpg",
      tags: ["Cooking", "Food Culture", "Regional"],
      difficulty: "Beginner",
    },
    {
      id: 6,
      type: "Music",
      title: "Carnatic Music Fundamentals",
      description: "Learn the basics of South Indian classical music and its rich traditions",
      location: "Tamil Nadu",
      rating: 4.9,
      image: "/carnatic-music.jpg",
      tags: ["Classical Music", "Vocal", "Instruments"],
      difficulty: "Intermediate",
    },
  ]

  const categories = [
    { name: "All", count: 156 },
    { name: "Heritage Sites", count: 45 },
    { name: "Art Forms", count: 38 },
    { name: "Festivals", count: 28 },
    { name: "Crafts", count: 32 },
    { name: "Cuisine", count: 18 },
    { name: "Music & Dance", count: 25 },
  ]

  const regions = [
    "All Regions",
    "North India",
    "South India",
    "East India",
    "West India",
    "Central India",
    "Northeast India",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-red-900 mb-4">Explore Heritage</h1>
          <p className="text-lg text-red-700 max-w-2xl mx-auto">
            Discover India's rich cultural tapestry through immersive experiences, traditional arts, and heritage sites
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-400 w-5 h-5" />
            <Input
              placeholder="Search for art forms, heritage sites, festivals..."
              className="pl-10 pr-4 py-3 border-red-200 focus:border-red-400"
            />
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge
                key={category.name}
                variant={category.name === "All" ? "default" : "outline"}
                className="cursor-pointer hover:bg-red-100 px-4 py-2"
              >
                {category.name} ({category.count})
              </Badge>
            ))}
          </div>

          {/* Region Filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            {regions.map((region) => (
              <Badge
                key={region}
                variant={region === "All Regions" ? "default" : "outline"}
                className="cursor-pointer hover:bg-red-100 px-3 py-1 text-sm"
              >
                {region}
              </Badge>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="text-center border-red-200">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-red-600">156</div>
              <div className="text-sm text-red-700">Experiences</div>
            </CardContent>
          </Card>
          <Card className="text-center border-red-200">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-red-600">28</div>
              <div className="text-sm text-red-700">States Covered</div>
            </CardContent>
          </Card>
          <Card className="text-center border-red-200">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-red-600">45</div>
              <div className="text-sm text-red-700">Art Forms</div>
            </CardContent>
          </Card>
          <Card className="text-center border-red-200">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-red-600">12K+</div>
              <div className="text-sm text-red-700">Active Learners</div>
            </CardContent>
          </Card>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredContent.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow border-red-200 overflow-hidden">
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-red-200 to-orange-200 flex items-center justify-center">
                  <div className="text-red-600 text-center">
                    <div className="text-4xl mb-2">🏛️</div>
                    <p className="text-sm font-medium">{item.type}</p>
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute top-2 right-2 bg-white/80 hover:bg-white text-red-600"
                >
                  <Bookmark className="w-4 h-4" />
                </Button>
                <Badge className="absolute bottom-2 left-2 bg-red-600">{item.type}</Badge>
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-red-900 text-lg mb-2">{item.title}</CardTitle>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center text-yellow-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm ml-1">{item.rating}</span>
                      </div>
                      <Badge
                        variant="outline"
                        className={`text-xs ${
                          item.difficulty === "Easy"
                            ? "border-green-300 text-green-700"
                            : item.difficulty === "Beginner"
                              ? "border-green-300 text-green-700"
                              : item.difficulty === "Intermediate"
                                ? "border-yellow-300 text-yellow-700"
                                : "border-red-300 text-red-700"
                        }`}
                      >
                        {item.difficulty}
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-sm">{item.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Location */}
                <div className="flex items-center text-red-600 text-sm">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{item.location}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button className="flex-1 bg-red-600 hover:bg-red-700 text-sm">Explore</Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-red-300 text-red-600 hover:bg-red-50 text-sm bg-transparent"
                  >
                    Save
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-50 bg-transparent">
            Load More Experiences
          </Button>
        </div>
      </div>
    </div>
  )
}
