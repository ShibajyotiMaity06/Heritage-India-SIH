"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function AdminDashboard() {
  const [pendingSubmissions] = useState([
    {
      id: 1,
      user: "Priya Sharma",
      challenge: "Learn Basic Bharatanatyam Mudras",
      submittedDate: "2024-03-01",
      status: "pending",
      coins: 50,
      description: "I practiced all 5 mudras and recorded a video showing proper hand positions.",
      hasVideo: true,
      hasPhotos: false,
    },
    {
      id: 2,
      user: "Raj Patel",
      challenge: "Create a Madhubani Painting",
      submittedDate: "2024-03-02",
      status: "pending",
      coins: 75,
      description: "Created a traditional fish motif painting using natural colors.",
      hasVideo: false,
      hasPhotos: true,
    },
    {
      id: 3,
      user: "Anita Kumar",
      challenge: "Traditional Rangoli Design",
      submittedDate: "2024-03-02",
      status: "pending",
      coins: 40,
      description: "Made a beautiful geometric rangoli pattern in my courtyard.",
      hasVideo: true,
      hasPhotos: true,
    },
  ])

  const [users] = useState([
    {
      id: 1,
      name: "Priya Sharma",
      email: "priya@example.com",
      joinDate: "2024-01-15",
      coins: 250,
      challengesCompleted: 8,
      state: "Maharashtra",
      status: "active",
    },
    {
      id: 2,
      name: "Raj Patel",
      email: "raj@example.com",
      joinDate: "2024-02-01",
      coins: 180,
      challengesCompleted: 5,
      state: "Gujarat",
      status: "active",
    },
    {
      id: 3,
      name: "Anita Kumar",
      email: "anita@example.com",
      joinDate: "2024-02-20",
      coins: 120,
      challengesCompleted: 3,
      state: "Tamil Nadu",
      status: "active",
    },
  ])

  const [rewards] = useState([
    {
      id: 1,
      title: "Handcrafted Madhubani Painting",
      category: "Art",
      coins: 200,
      stock: 5,
      redeemed: 12,
      status: "active",
    },
    {
      id: 2,
      title: "Online Bharatanatyam Workshop",
      category: "Workshop",
      coins: 100,
      stock: "Unlimited",
      redeemed: 8,
      status: "active",
    },
    {
      id: 3,
      title: "Heritage Village Tour - Rajasthan",
      category: "Experience",
      coins: 500,
      stock: 3,
      redeemed: 2,
      status: "active",
    },
  ])

  const handleApproveSubmission = (submissionId: number) => {
    // TODO: Implement approval logic
    console.log("Approving submission:", submissionId)
    alert("Submission approved! User will receive coins.")
  }

  const handleRejectSubmission = (submissionId: number) => {
    // TODO: Implement rejection logic
    console.log("Rejecting submission:", submissionId)
    alert("Submission rejected. User will be notified.")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-muted">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage Heritage India platform content and users</p>
        </div>

        {/* Overview Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-2">👥</div>
              <div className="text-2xl font-bold text-primary">1,247</div>
              <div className="text-sm text-muted-foreground">Total Users</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-2">📝</div>
              <div className="text-2xl font-bold text-primary">23</div>
              <div className="text-sm text-muted-foreground">Pending Submissions</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-2">🏆</div>
              <div className="text-2xl font-bold text-primary">156</div>
              <div className="text-sm text-muted-foreground">Challenges Completed Today</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-2">🎁</div>
              <div className="text-2xl font-bold text-primary">89</div>
              <div className="text-sm text-muted-foreground">Rewards Redeemed</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="submissions" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="submissions">Submissions</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="rewards">Rewards</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Submissions Management */}
          <TabsContent value="submissions">
            <Card>
              <CardHeader>
                <CardTitle>Pending Challenge Submissions</CardTitle>
                <CardDescription>Review and approve user challenge submissions</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Challenge</TableHead>
                      <TableHead>Submitted</TableHead>
                      <TableHead>Coins</TableHead>
                      <TableHead>Media</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pendingSubmissions.map((submission) => (
                      <TableRow key={submission.id}>
                        <TableCell className="font-medium">{submission.user}</TableCell>
                        <TableCell>{submission.challenge}</TableCell>
                        <TableCell>{submission.submittedDate}</TableCell>
                        <TableCell>
                          <Badge variant="secondary">{submission.coins} coins</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            {submission.hasVideo && <Badge variant="outline">Video</Badge>}
                            {submission.hasPhotos && <Badge variant="outline">Photos</Badge>}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" size="sm">
                                  Review
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-2xl">
                                <DialogHeader>
                                  <DialogTitle>Review Submission</DialogTitle>
                                  <DialogDescription>
                                    {submission.challenge} by {submission.user}
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="space-y-4">
                                  <div>
                                    <Label>User Description:</Label>
                                    <p className="text-sm text-muted-foreground mt-1">{submission.description}</p>
                                  </div>
                                  <div className="grid grid-cols-2 gap-4">
                                    <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                                      {submission.hasVideo ? (
                                        <span className="text-sm text-muted-foreground">Video Preview</span>
                                      ) : (
                                        <span className="text-sm text-muted-foreground">No Video</span>
                                      )}
                                    </div>
                                    <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                                      {submission.hasPhotos ? (
                                        <span className="text-sm text-muted-foreground">Photo Gallery</span>
                                      ) : (
                                        <span className="text-sm text-muted-foreground">No Photos</span>
                                      )}
                                    </div>
                                  </div>
                                  <div className="flex gap-2 justify-end">
                                    <Button variant="outline" onClick={() => handleRejectSubmission(submission.id)}>
                                      Reject
                                    </Button>
                                    <Button
                                      className="bg-primary hover:bg-primary/90"
                                      onClick={() => handleApproveSubmission(submission.id)}
                                    >
                                      Approve
                                    </Button>
                                  </div>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* User Management */}
          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Monitor user activity and manage accounts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Input placeholder="Search users..." className="max-w-sm" />
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Join Date</TableHead>
                      <TableHead>Coins</TableHead>
                      <TableHead>Challenges</TableHead>
                      <TableHead>State</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.joinDate}</TableCell>
                        <TableCell>{user.coins}</TableCell>
                        <TableCell>{user.challengesCompleted}</TableCell>
                        <TableCell>{user.state}</TableCell>
                        <TableCell>
                          <Badge variant={user.status === "active" ? "default" : "secondary"}>{user.status}</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Rewards Management */}
          <TabsContent value="rewards">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Rewards Management</CardTitle>
                      <CardDescription>Manage available rewards and track redemptions</CardDescription>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="bg-primary hover:bg-primary/90">Add New Reward</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Add New Reward</DialogTitle>
                          <DialogDescription>Create a new reward for users to redeem</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="title">Reward Title</Label>
                            <Input id="title" placeholder="Enter reward title" />
                          </div>
                          <div>
                            <Label htmlFor="description">Description</Label>
                            <Textarea id="description" placeholder="Describe the reward" />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="category">Category</Label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="art">Art</SelectItem>
                                  <SelectItem value="workshop">Workshop</SelectItem>
                                  <SelectItem value="experience">Experience</SelectItem>
                                  <SelectItem value="collectible">Collectible</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label htmlFor="coins">Coin Cost</Label>
                              <Input id="coins" type="number" placeholder="0" />
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="stock">Stock Quantity</Label>
                            <Input id="stock" placeholder="Enter quantity or 'Unlimited'" />
                          </div>
                          <Button className="w-full bg-primary hover:bg-primary/90">Create Reward</Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Coins</TableHead>
                        <TableHead>Stock</TableHead>
                        <TableHead>Redeemed</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {rewards.map((reward) => (
                        <TableRow key={reward.id}>
                          <TableCell className="font-medium">{reward.title}</TableCell>
                          <TableCell>
                            <Badge variant="secondary">{reward.category}</Badge>
                          </TableCell>
                          <TableCell>{reward.coins}</TableCell>
                          <TableCell>{reward.stock}</TableCell>
                          <TableCell>{reward.redeemed}</TableCell>
                          <TableCell>
                            <Badge variant={reward.status === "active" ? "default" : "secondary"}>
                              {reward.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                Edit
                              </Button>
                              <Button variant="outline" size="sm">
                                Disable
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Content Management */}
          <TabsContent value="content">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Heritage Art Forms</CardTitle>
                  <CardDescription>Manage featured art forms and cultural content</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button className="w-full bg-primary hover:bg-primary/90">Add New Art Form</Button>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <h4 className="font-semibold">Kuchipudi Dance</h4>
                          <p className="text-sm text-muted-foreground">Andhra Pradesh</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <h4 className="font-semibold">Kalamkari Textiles</h4>
                          <p className="text-sm text-muted-foreground">Tamil Nadu</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <h4 className="font-semibold">Kondapalli Toys</h4>
                          <p className="text-sm text-muted-foreground">Andhra Pradesh</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Challenges</CardTitle>
                  <CardDescription>Create and manage heritage challenges</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button className="w-full bg-primary hover:bg-primary/90">Create New Challenge</Button>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <h4 className="font-semibold">Learn Basic Bharatanatyam Mudras</h4>
                          <p className="text-sm text-muted-foreground">50 coins • 234 participants</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <h4 className="font-semibold">Create a Madhubani Painting</h4>
                          <p className="text-sm text-muted-foreground">75 coins • 156 participants</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Analytics */}
          <TabsContent value="analytics">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>User Engagement</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Daily Active Users</span>
                      <span className="font-semibold">342</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Weekly Active Users</span>
                      <span className="font-semibold">1,247</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Average Session Duration</span>
                      <span className="font-semibold">12 mins</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Challenge Completion Rate</span>
                      <span className="font-semibold">78%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Popular Content</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Most Popular Challenge</span>
                      <span className="font-semibold text-sm">Rangoli Design</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Most Redeemed Reward</span>
                      <span className="font-semibold text-sm">Digital Badges</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Top State by Users</span>
                      <span className="font-semibold">Maharashtra</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Average Coins per User</span>
                      <span className="font-semibold">156</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
