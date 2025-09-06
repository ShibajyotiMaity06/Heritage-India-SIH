"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

export default function CommunityPage() {
  const [leaderboard] = useState([
    {
      rank: 1,
      name: "Priya Sharma",
      state: "Maharashtra",
      challenges: 24,
      coins: 1250,
      avatar: "/avatars/priya.jpg",
      badge: "Heritage Master",
    },
    {
      rank: 2,
      name: "Raj Patel",
      state: "Gujarat",
      challenges: 22,
      coins: 1180,
      avatar: "/avatars/raj.jpg",
      badge: "Cultural Explorer",
    },
    {
      rank: 3,
      name: "Anita Kumar",
      state: "Tamil Nadu",
      challenges: 20,
      coins: 1050,
      avatar: "/avatars/anita.jpg",
      badge: "Art Enthusiast",
    },
    {
      rank: 4,
      name: "Vikram Singh",
      state: "Rajasthan",
      challenges: 18,
      coins: 920,
      avatar: "/avatars/vikram.jpg",
      badge: "Tradition Keeper",
    },
    {
      rank: 5,
      name: "Meera Nair",
      state: "Kerala",
      challenges: 16,
      coins: 840,
      avatar: "/avatars/meera.jpg",
      badge: "Dance Devotee",
    },
  ])

  const [stories] = useState([
    {
      id: 1,
      title: "Reviving My Grandmother's Warli Art",
      author: "Sunita Patil",
      state: "Maharashtra",
      date: "2024-03-01",
      excerpt:
        "How I learned traditional Warli painting from my 85-year-old grandmother and started teaching it to local children...",
      likes: 45,
      comments: 12,
      image: "/stories/warli-grandmother.jpg",
      tags: ["Warli", "Family Tradition", "Teaching"],
    },
    {
      id: 2,
      title: "The Last Kondapalli Toy Maker in Our Village",
      author: "Ravi Kumar",
      state: "Andhra Pradesh",
      date: "2024-02-28",
      excerpt: "An interview with 70-year-old master craftsman who has been making wooden toys for over 50 years...",
      likes: 67,
      comments: 23,
      image: "/stories/kondapalli-craftsman.jpg",
      tags: ["Kondapalli", "Craftsmanship", "Interview"],
    },
    {
      id: 3,
      title: "Bringing Kuchipudi to Urban Schools",
      author: "Lakshmi Devi",
      state: "Telangana",
      date: "2024-02-25",
      excerpt: "My journey of introducing classical Kuchipudi dance to children in Hyderabad's urban schools...",
      likes: 38,
      comments: 8,
      image: "/stories/kuchipudi-school.jpg",
      tags: ["Kuchipudi", "Education", "Urban Revival"],
    },
  ])

  const [upcomingEvents] = useState([
    {
      id: 1,
      title: "Virtual Bharatanatyam Workshop",
      date: "2024-03-15",
      time: "6:00 PM IST",
      instructor: "Guru Padma Subrahmanyam",
      participants: 45,
      maxParticipants: 50,
      type: "Workshop",
      price: "Free for members",
    },
    {
      id: 2,
      title: "Holi Festival Celebration",
      date: "2024-03-25",
      time: "10:00 AM IST",
      location: "Community Center, Delhi",
      participants: 234,
      maxParticipants: 300,
      type: "Festival",
      price: "₹200 per person",
    },
    {
      id: 3,
      title: "Pottery Making Masterclass",
      date: "2024-03-30",
      time: "2:00 PM IST",
      instructor: "Master Potter Rajesh",
      participants: 12,
      maxParticipants: 15,
      type: "Workshop",
      price: "₹500 per person",
    },
  ])

  const [discussions] = useState([
    {
      id: 1,
      title: "Best practices for preserving traditional recipes?",
      author: "Kavya Menon",
      replies: 23,
      lastActivity: "2 hours ago",
      category: "Culinary Heritage",
      isHot: true,
    },
    {
      id: 2,
      title: "Looking for Madhubani painting tutorials",
      author: "Arjun Das",
      replies: 15,
      lastActivity: "4 hours ago",
      category: "Art & Crafts",
      isHot: false,
    },
    {
      id: 3,
      title: "Organizing heritage walks in your city",
      author: "Neha Gupta",
      replies: 31,
      lastActivity: "6 hours ago",
      category: "Community Events",
      isHot: true,
    },
  ])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-muted">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Heritage Community</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Connect with fellow heritage enthusiasts, share stories, participate in events, and celebrate India's rich
            cultural traditions together.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-2">👥</div>
              <div className="text-2xl font-bold text-primary">1,247</div>
              <div className="text-sm text-muted-foreground">Active Members</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-2">📖</div>
              <div className="text-2xl font-bold text-primary">89</div>
              <div className="text-sm text-muted-foreground">Stories Shared</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-2">🎭</div>
              <div className="text-2xl font-bold text-primary">156</div>
              <div className="text-sm text-muted-foreground">Events Hosted</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-2">💬</div>
              <div className="text-2xl font-bold text-primary">342</div>
              <div className="text-sm text-muted-foreground">Active Discussions</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="leaderboard" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
            <TabsTrigger value="stories">Stories</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="discussions">Discussions</TabsTrigger>
            <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
          </TabsList>

          {/* Leaderboard */}
          <TabsContent value="leaderboard">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Top Heritage Champions</CardTitle>
                    <CardDescription>Users ranked by challenges completed and community contributions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {leaderboard.map((user) => (
                        <div
                          key={user.rank}
                          className={`flex items-center gap-4 p-4 rounded-lg border ${
                            user.rank <= 3 ? "bg-gradient-to-r from-secondary/20 to-accent/20" : "bg-card"
                          }`}
                        >
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">
                            {user.rank}
                          </div>
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                            <AvatarFallback>
                              {user.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold">{user.name}</h3>
                              <Badge variant="secondary">{user.badge}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{user.state}</p>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold text-primary">{user.challenges} challenges</div>
                            <div className="text-sm text-muted-foreground">{user.coins} coins</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Ranking</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">#12</div>
                      <p className="text-muted-foreground mb-4">Current Position</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Challenges Completed</span>
                          <span className="font-semibold">8</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Total Coins</span>
                          <span className="font-semibold">420</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Stories Shared</span>
                          <span className="font-semibold">2</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>State Rankings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Maharashtra</span>
                        <span className="font-semibold">234 members</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tamil Nadu</span>
                        <span className="font-semibold">198 members</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Gujarat</span>
                        <span className="font-semibold">156 members</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Karnataka</span>
                        <span className="font-semibold">142 members</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Stories */}
          <TabsContent value="stories">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Heritage Stories</h2>
                  <Button className="bg-primary hover:bg-primary/90">Share Your Story</Button>
                </div>

                <div className="space-y-6">
                  {stories.map((story) => (
                    <Card key={story.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex gap-4">
                          <img
                            src={story.image || "/placeholder.svg"}
                            alt={story.title}
                            className="w-24 h-24 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <h3 className="text-xl font-semibold text-primary hover:text-primary/80 cursor-pointer">
                                {story.title}
                              </h3>
                              <Badge variant="secondary">{story.state}</Badge>
                            </div>
                            <p className="text-muted-foreground mb-3">{story.excerpt}</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                              <span>By {story.author}</span>
                              <span>{story.date}</span>
                              <span>❤️ {story.likes}</span>
                              <span>💬 {story.comments}</span>
                            </div>
                            <div className="flex gap-2">
                              {story.tags.map((tag) => (
                                <Badge key={tag} variant="outline" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Popular Tags</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Bharatanatyam",
                        "Madhubani",
                        "Warli",
                        "Kuchipudi",
                        "Family Tradition",
                        "Teaching",
                        "Revival",
                      ].map((tag) => (
                        <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-secondary/80">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Featured Authors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>SP</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">Sunita Patil</h4>
                          <p className="text-sm text-muted-foreground">5 stories • Maharashtra</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>RK</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">Ravi Kumar</h4>
                          <p className="text-sm text-muted-foreground">3 stories • Andhra Pradesh</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Events */}
          <TabsContent value="events">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Upcoming Events</h2>
                  <Button className="bg-primary hover:bg-primary/90">Create Event</Button>
                </div>

                <div className="space-y-6">
                  {upcomingEvents.map((event) => (
                    <Card key={event.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-primary">{event.title}</h3>
                            <div className="flex items-center gap-4 text-muted-foreground mt-2">
                              <span>📅 {event.date}</span>
                              <span>🕕 {event.time}</span>
                              {event.location && <span>📍 {event.location}</span>}
                            </div>
                          </div>
                          <Badge variant={event.type === "Workshop" ? "default" : "secondary"}>{event.type}</Badge>
                        </div>

                        {event.instructor && (
                          <p className="text-muted-foreground mb-3">Instructor: {event.instructor}</p>
                        )}

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <span className="text-sm text-muted-foreground">
                              {event.participants}/{event.maxParticipants} participants
                            </span>
                            <span className="font-semibold text-primary">{event.price}</span>
                          </div>
                          <Button variant="outline">Join Event</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Event Calendar</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <div className="text-6xl mb-4">📅</div>
                      <p className="text-muted-foreground">Interactive calendar view coming soon</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>My Events</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 border rounded-lg">
                        <h4 className="font-semibold text-sm">Bharatanatyam Workshop</h4>
                        <p className="text-xs text-muted-foreground">March 15 • Registered</p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <h4 className="font-semibold text-sm">Pottery Masterclass</h4>
                        <p className="text-xs text-muted-foreground">March 30 • Waitlist</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Discussions */}
          <TabsContent value="discussions">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Community Discussions</h2>
                  <Button className="bg-primary hover:bg-primary/90">Start Discussion</Button>
                </div>

                <div className="space-y-4">
                  {discussions.map((discussion) => (
                    <Card key={discussion.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="font-semibold text-primary hover:text-primary/80 cursor-pointer">
                                {discussion.title}
                              </h3>
                              {discussion.isHot && <Badge variant="destructive">Hot</Badge>}
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>By {discussion.author}</span>
                              <span>💬 {discussion.replies} replies</span>
                              <span>🕒 {discussion.lastActivity}</span>
                            </div>
                          </div>
                          <Badge variant="secondary">{discussion.category}</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Discussion Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {["Art & Crafts", "Dance & Music", "Culinary Heritage", "Festivals", "Community Events"].map(
                        (category) => (
                          <div
                            key={category}
                            className="flex justify-between p-2 hover:bg-accent rounded cursor-pointer"
                          >
                            <span>{category}</span>
                            <span className="text-muted-foreground">23</span>
                          </div>
                        ),
                      )}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Active Contributors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback>KM</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold text-sm">Kavya Menon</h4>
                          <p className="text-xs text-muted-foreground">45 posts this week</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback>AD</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold text-sm">Arjun Das</h4>
                          <p className="text-xs text-muted-foreground">32 posts this week</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Marketplace */}
          <TabsContent value="marketplace">
            <div className="text-center py-16">
              <div className="text-6xl mb-6">🛍️</div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Heritage Marketplace</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Discover and purchase authentic handmade crafts directly from talented artisans across India. Support
                traditional craftsmanship while building your heritage collection.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/marketplace">Explore Marketplace</Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
