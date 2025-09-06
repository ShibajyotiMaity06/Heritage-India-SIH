import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, MapPin, Star, Plus } from "lucide-react"

export default function CommunitiesPage() {
  const communities = [
    {
      id: 1,
      name: "Rajasthan Folk Artists",
      description: "Preserving the vibrant folk traditions of Rajasthan through music, dance, and storytelling",
      members: 1247,
      location: "Rajasthan, India",
      category: "Folk Arts",
      image: "/rajasthan-folk.jpg",
      rating: 4.8,
      activities: ["Ghoomar Dance", "Kalbeliya", "Puppet Shows", "Folk Music"],
    },
    {
      id: 2,
      name: "Kerala Artisans Collective",
      description: "Master craftspeople keeping alive the traditional arts of Kerala",
      members: 892,
      location: "Kerala, India",
      category: "Handicrafts",
      image: "/kerala-artisans.jpg",
      rating: 4.9,
      activities: ["Kathakali Masks", "Coir Crafts", "Wood Carving", "Mural Painting"],
    },
    {
      id: 3,
      name: "Bengal Textile Weavers",
      description: "Celebrating the rich textile heritage of Bengal through traditional weaving",
      members: 654,
      location: "West Bengal, India",
      category: "Textiles",
      image: "/bengal-textiles.jpg",
      rating: 4.7,
      activities: ["Jamdani Weaving", "Kantha Embroidery", "Silk Weaving", "Block Printing"],
    },
    {
      id: 4,
      name: "Tamil Classical Arts Society",
      description: "Dedicated to preserving and promoting Tamil classical arts and literature",
      members: 1156,
      location: "Tamil Nadu, India",
      category: "Classical Arts",
      image: "/tamil-classical.jpg",
      rating: 4.8,
      activities: ["Bharatanatyam", "Carnatic Music", "Tamil Literature", "Temple Arts"],
    },
    {
      id: 5,
      name: "Madhya Pradesh Tribal Arts",
      description: "Showcasing the unique tribal art forms and cultural practices of Central India",
      members: 423,
      location: "Madhya Pradesh, India",
      category: "Tribal Arts",
      image: "/tribal-arts.jpg",
      rating: 4.6,
      activities: ["Warli Painting", "Gond Art", "Tribal Dance", "Traditional Crafts"],
    },
    {
      id: 6,
      name: "Punjab Heritage Keepers",
      description: "Preserving Punjabi culture through traditional arts, crafts, and celebrations",
      members: 789,
      location: "Punjab, India",
      category: "Cultural Heritage",
      image: "/punjab-heritage.jpg",
      rating: 4.7,
      activities: ["Bhangra", "Phulkari Embroidery", "Punjabi Folk Music", "Traditional Crafts"],
    },
  ]

  const categories = [
    "All",
    "Folk Arts",
    "Handicrafts",
    "Textiles",
    "Classical Arts",
    "Tribal Arts",
    "Cultural Heritage",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-red-900 mb-4">Heritage Communities</h1>
          <p className="text-lg text-red-700 max-w-2xl mx-auto">
            Join passionate communities dedicated to preserving and celebrating India's rich cultural heritage
          </p>
        </div>

        {/* Create Community CTA */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-xl p-6 mb-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Start Your Own Community</h2>
              <p className="text-red-100">Bring together people who share your passion for heritage preservation</p>
            </div>
            <Button className="bg-white text-red-600 hover:bg-red-50 mt-4 md:mt-0">
              <Plus className="w-4 h-4 mr-2" />
              Create Community
            </Button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className="cursor-pointer hover:bg-red-100 px-4 py-2"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Communities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communities.map((community) => (
            <Card key={community.id} className="hover:shadow-lg transition-shadow border-red-200">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-red-900 text-lg mb-2">{community.name}</CardTitle>
                    <Badge variant="outline" className="text-xs mb-2">
                      {community.category}
                    </Badge>
                  </div>
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm ml-1">{community.rating}</span>
                  </div>
                </div>
                <CardDescription className="text-sm">{community.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Community Stats */}
                <div className="flex items-center justify-between text-sm text-red-600">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{community.members.toLocaleString()} members</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{community.location}</span>
                  </div>
                </div>

                {/* Activities */}
                <div>
                  <p className="text-sm font-medium text-red-900 mb-2">Popular Activities:</p>
                  <div className="flex flex-wrap gap-1">
                    {community.activities.slice(0, 3).map((activity) => (
                      <Badge key={activity} variant="secondary" className="text-xs">
                        {activity}
                      </Badge>
                    ))}
                    {community.activities.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{community.activities.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Join Button */}
                <Button className="w-full bg-red-600 hover:bg-red-700">Join Community</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-50 bg-transparent">
            Load More Communities
          </Button>
        </div>
      </div>
    </div>
  )
}
