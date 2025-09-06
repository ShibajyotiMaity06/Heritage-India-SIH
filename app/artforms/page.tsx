import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Users, Play, BookOpen } from "lucide-react"

export default function ArtFormsPage() {
  const artForms = [
    {
      id: 1,
      name: "Bharatanatyam",
      category: "Classical Dance",
      origin: "Tamil Nadu",
      description:
        "One of the oldest classical dance forms of India, characterized by fixed upper torso, bent legs, and sophisticated footwork.",
      image: "/bharatanatyam-dance.jpg",
      difficulty: "Advanced",
      duration: "6-8 years to master",
      practitioners: "50,000+",
      keyElements: ["Mudras", "Expressions", "Rhythm", "Storytelling"],
      videoUrl: "/bharatanatyam-demo.mp4",
    },
    {
      id: 2,
      name: "Madhubani Painting",
      category: "Folk Art",
      origin: "Bihar",
      description:
        "Traditional painting style using natural dyes and pigments, featuring geometric patterns and mythological themes.",
      image: "/madhubani-art.jpg",
      difficulty: "Intermediate",
      duration: "2-3 years to master",
      practitioners: "25,000+",
      keyElements: ["Natural Colors", "Geometric Patterns", "Mythology", "Line Work"],
      videoUrl: "/madhubani-demo.mp4",
    },
    {
      id: 3,
      name: "Kuchipudi",
      category: "Classical Dance",
      origin: "Andhra Pradesh",
      description:
        "Classical dance form known for its graceful movements, dramatic characterizations, and use of speech.",
      image: "/kuchipudi-dance.jpg",
      difficulty: "Advanced",
      duration: "7-10 years to master",
      practitioners: "15,000+",
      keyElements: ["Tarangam", "Dramatic Expression", "Vocal Accompaniment", "Fluid Movements"],
      videoUrl: "/kuchipudi-demo.mp4",
    },
    {
      id: 4,
      name: "Warli Art",
      category: "Tribal Art",
      origin: "Maharashtra",
      description:
        "Ancient tribal art form using simple geometric shapes to depict daily life, nature, and social activities.",
      image: "/warli-painting.jpg",
      difficulty: "Beginner",
      duration: "6 months to 1 year",
      practitioners: "8,000+",
      keyElements: ["Geometric Shapes", "Daily Life Themes", "White on Brown", "Minimalist Style"],
      videoUrl: "/warli-demo.mp4",
    },
    {
      id: 5,
      name: "Kalamkari",
      category: "Textile Art",
      origin: "Andhra Pradesh",
      description:
        "Ancient art of hand painting and block printing on textiles using natural dyes and traditional motifs.",
      image: "/kalamkari-textile.jpg",
      difficulty: "Intermediate",
      duration: "3-4 years to master",
      practitioners: "12,000+",
      keyElements: ["Natural Dyes", "Hand Painting", "Mythological Themes", "Intricate Details"],
      videoUrl: "/kalamkari-demo.mp4",
    },
    {
      id: 6,
      name: "Kathakali",
      category: "Classical Dance Drama",
      origin: "Kerala",
      description:
        "Elaborate classical dance drama known for its colorful makeup, costumes, and expressive storytelling.",
      image: "/kathakali-dance.jpg",
      difficulty: "Expert",
      duration: "10+ years to master",
      practitioners: "5,000+",
      keyElements: ["Elaborate Makeup", "Facial Expressions", "Hand Gestures", "Epic Stories"],
      videoUrl: "/kathakali-demo.mp4",
    },
  ]

  const categories = [
    "All",
    "Classical Dance",
    "Folk Art",
    "Tribal Art",
    "Textile Art",
    "Classical Dance Drama",
    "Music",
    "Sculpture",
  ]
  const difficulties = ["All Levels", "Beginner", "Intermediate", "Advanced", "Expert"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-red-900 mb-4">Indian Art Forms</h1>
          <p className="text-lg text-red-700 max-w-2xl mx-auto">
            Discover the rich tapestry of Indian artistic traditions spanning dance, painting, sculpture, and crafts
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div>
            <h3 className="text-sm font-medium text-red-900 mb-2">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className="cursor-pointer hover:bg-red-100 px-3 py-1"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-red-900 mb-2">Difficulty Level</h3>
            <div className="flex flex-wrap gap-2">
              {difficulties.map((difficulty) => (
                <Badge
                  key={difficulty}
                  variant={difficulty === "All Levels" ? "default" : "outline"}
                  className="cursor-pointer hover:bg-red-100 px-3 py-1"
                >
                  {difficulty}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Art Forms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artForms.map((artForm) => (
            <Card key={artForm.id} className="hover:shadow-lg transition-shadow border-red-200 overflow-hidden">
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-red-200 to-orange-200 flex items-center justify-center">
                  <div className="text-red-600 text-center">
                    <BookOpen className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-sm">{artForm.name}</p>
                  </div>
                </div>
                <Button size="sm" className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white">
                  <Play className="w-4 h-4" />
                </Button>
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-red-900 text-lg mb-1">{artForm.name}</CardTitle>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">
                        {artForm.category}
                      </Badge>
                      <Badge
                        variant="secondary"
                        className={`text-xs ${
                          artForm.difficulty === "Beginner"
                            ? "bg-green-100 text-green-700"
                            : artForm.difficulty === "Intermediate"
                              ? "bg-yellow-100 text-yellow-700"
                              : artForm.difficulty === "Advanced"
                                ? "bg-orange-100 text-orange-700"
                                : "bg-red-100 text-red-700"
                        }`}
                      >
                        {artForm.difficulty}
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-sm">{artForm.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Art Form Details */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center text-red-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{artForm.origin}</span>
                  </div>
                  <div className="flex items-center text-red-600">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{artForm.practitioners}</span>
                  </div>
                  <div className="flex items-center text-red-600 col-span-2">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{artForm.duration}</span>
                  </div>
                </div>

                {/* Key Elements */}
                <div>
                  <p className="text-sm font-medium text-red-900 mb-2">Key Elements:</p>
                  <div className="flex flex-wrap gap-1">
                    {artForm.keyElements.map((element) => (
                      <Badge key={element} variant="secondary" className="text-xs">
                        {element}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button className="flex-1 bg-red-600 hover:bg-red-700 text-sm">Learn More</Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-red-300 text-red-600 hover:bg-red-50 text-sm bg-transparent"
                  >
                    Find Teachers
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-50 bg-transparent">
            Explore More Art Forms
          </Button>
        </div>
      </div>
    </div>
  )
}
