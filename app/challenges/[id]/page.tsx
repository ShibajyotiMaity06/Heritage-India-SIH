"use client"

import type React from "react"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ChallengePage() {
  const params = useParams()
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submission, setSubmission] = useState({
    description: "",
    photos: [] as File[],
    video: null as File | null,
  })

  // Mock challenge data - in real app, fetch based on params.id
  const challenge = {
    id: params.id,
    title: "Learn Basic Bharatanatyam Mudras",
    description: "Master 5 fundamental hand gestures used in classical Bharatanatyam dance",
    difficulty: "Beginner",
    coins: 50,
    duration: "30 mins",
    category: "Dance",
    state: "Tamil Nadu",
    instructions: [
      "Watch the instructional video provided below",
      "Practice each of the 5 mudras: Pataka, Tripataka, Ardhachandra, Kartarimukha, and Mayura",
      "Hold each mudra for at least 10 seconds with proper form",
      "Record a video showing all 5 mudras in sequence",
      "Upload your video along with a brief description of your experience",
    ],
    requirements: [
      "Clear video showing hand positions",
      "Minimum 30-second video duration",
      "Brief written description (50+ words)",
      "Proper lighting for visibility",
    ],
    resources: [
      {
        title: "Bharatanatyam Mudras Tutorial",
        type: "Video",
        url: "#",
      },
      {
        title: "Hand Position Reference Guide",
        type: "PDF",
        url: "#",
      },
      {
        title: "Cultural Context of Mudras",
        type: "Article",
        url: "#",
      },
    ],
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, type: "photos" | "video") => {
    const files = e.target.files
    if (!files) return

    if (type === "photos") {
      setSubmission({ ...submission, photos: Array.from(files) })
    } else if (type === "video" && files[0]) {
      setSubmission({ ...submission, video: files[0] })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // TODO: Implement actual submission logic
    console.log("Submitting challenge:", submission)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      alert("Challenge submitted successfully! You'll receive your coins once reviewed.")
      router.push("/challenges")
    }, 2000)
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
        <div className="mb-8">
          <Button variant="outline" onClick={() => router.back()} className="mb-4">
            ← Back to Challenges
          </Button>

          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">{challenge.title}</h1>
              <p className="text-muted-foreground mb-4">{challenge.description}</p>
              <div className="flex items-center gap-4">
                <Badge className={getDifficultyColor(challenge.difficulty)}>{challenge.difficulty}</Badge>
                <Badge variant="secondary">{challenge.state}</Badge>
                <div className="flex items-center gap-1">
                  <span className="text-lg">🪙</span>
                  <span className="font-semibold text-primary">{challenge.coins} coins</span>
                </div>
                <span className="text-muted-foreground">⏱️ {challenge.duration}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Challenge Details */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="instructions" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="instructions">Instructions</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
                <TabsTrigger value="submit">Submit</TabsTrigger>
              </TabsList>

              <TabsContent value="instructions">
                <Card>
                  <CardHeader>
                    <CardTitle>Challenge Instructions</CardTitle>
                    <CardDescription>Follow these steps to complete the challenge</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Steps to Complete:</h4>
                        <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                          {challenge.instructions.map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                          ))}
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Requirements:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          {challenge.requirements.map((requirement, index) => (
                            <li key={index}>{requirement}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="resources">
                <Card>
                  <CardHeader>
                    <CardTitle>Learning Resources</CardTitle>
                    <CardDescription>Use these materials to help you complete the challenge</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {challenge.resources.map((resource, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <h4 className="font-semibold">{resource.title}</h4>
                            <p className="text-sm text-muted-foreground">{resource.type}</p>
                          </div>
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="submit">
                <Card>
                  <CardHeader>
                    <CardTitle>Submit Your Challenge</CardTitle>
                    <CardDescription>Upload your proof of completion to earn coins</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="description">Description of Your Experience</Label>
                        <Textarea
                          id="description"
                          placeholder="Describe what you learned and how the challenge went..."
                          value={submission.description}
                          onChange={(e) => setSubmission({ ...submission, description: e.target.value })}
                          className="mt-2"
                          rows={4}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="photos">Photos (Optional)</Label>
                        <Input
                          id="photos"
                          type="file"
                          accept="image/*"
                          multiple
                          onChange={(e) => handleFileUpload(e, "photos")}
                          className="mt-2"
                        />
                        <p className="text-sm text-muted-foreground mt-1">
                          Upload photos showing your process or final result
                        </p>
                      </div>

                      <div>
                        <Label htmlFor="video">Video Proof (Required)</Label>
                        <Input
                          id="video"
                          type="file"
                          accept="video/*"
                          onChange={(e) => handleFileUpload(e, "video")}
                          className="mt-2"
                          required
                        />
                        <p className="text-sm text-muted-foreground mt-1">
                          Upload a video demonstrating your completed challenge
                        </p>
                      </div>

                      <Alert>
                        <AlertDescription>
                          Your submission will be reviewed by our community moderators. You'll receive your coins once
                          approved, typically within 24 hours.
                        </AlertDescription>
                      </Alert>

                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit Challenge"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Challenge Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Participants</span>
                    <span className="font-semibold">234</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Success Rate</span>
                    <span className="font-semibold">87%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Avg. Completion</span>
                    <span className="font-semibold">25 mins</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Related Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-semibold text-sm">Advanced Bharatanatyam</h4>
                    <p className="text-xs text-muted-foreground">100 coins • Intermediate</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-semibold text-sm">Kathak Basic Steps</h4>
                    <p className="text-xs text-muted-foreground">60 coins • Beginner</p>
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
