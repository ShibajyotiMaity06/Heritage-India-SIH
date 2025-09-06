"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-amber-50 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-200/20 to-pink-200/20 dark:from-purple-900/20 dark:to-pink-900/20 -z-10 rounded-3xl blur-3xl"></div>
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-balance bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 dark:from-purple-400 dark:via-pink-400 dark:to-amber-400">{t("heroTitle")}</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">{t("heroSubtitle")}</p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none">
              <Link href="/auth/register">Join Our Heritage Journey</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/explore">{t("explore")}</Link>
            </Button>
          </div>
        </div>

        {/* Featured Heritage Arts */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-2 border-accent/20 hover:border-accent/40 transition-colors group">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-primary">Kuchipudi Dance</CardTitle>
                <Badge variant="secondary">Andhra Pradesh</Badge>
              </div>
              <CardDescription>Classical dance form with graceful storytelling</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-48 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-6xl">💃</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Experience the graceful movements and storytelling of this ancient dance tradition that combines drama,
                music, and dance.
              </p>
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                {t("learnMore")}
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-accent/20 hover:border-accent/40 transition-colors group">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-primary">Kalamkari Textiles</CardTitle>
                <Badge variant="secondary">Tamil Nadu</Badge>
              </div>
              <CardDescription>Hand-painted fabric art with natural dyes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-6xl">🎨</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Learn the intricate techniques of natural dye painting on cotton and silk, passed down through
                generations.
              </p>
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                {t("learnMore")}
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-accent/20 hover:border-accent/40 transition-colors group">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-primary">Kondapalli Toys</CardTitle>
                <Badge variant="secondary">Andhra Pradesh</Badge>
              </div>
              <CardDescription>Traditional wooden toys and figurines</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-48 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-6xl">🪆</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Discover the craftsmanship behind these colorful wooden figurines that tell stories of Indian mythology.
              </p>
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                {t("learnMore")}
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Heritage Stories Section */}
      <section className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">{t("featuredStories")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore the rich tapestry of Indian culture through stories, traditions, and practices from all 28 states
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">🏛️</div>
                <h3 className="font-semibold text-primary mb-2">Ancient Temples</h3>
                <p className="text-sm text-muted-foreground">Discover architectural marvels and spiritual traditions</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">🎭</div>
                <h3 className="font-semibold text-primary mb-2">Folk Performances</h3>
                <p className="text-sm text-muted-foreground">
                  Experience vibrant folk dances and theatrical traditions
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">🍛</div>
                <h3 className="font-semibold text-primary mb-2">Culinary Heritage</h3>
                <p className="text-sm text-muted-foreground">Learn traditional cooking methods and recipes</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-3xl mb-3">🧵</div>
                <h3 className="font-semibold text-primary mb-2">Textile Crafts</h3>
                <p className="text-sm text-muted-foreground">Master traditional weaving and embroidery techniques</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Challenges Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Interactive Heritage {t("challenges")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Participate in hands-on activities, earn digital coins, and unlock exclusive rewards
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🏆</span>
                  Daily {t("challenges")}
                </CardTitle>
                <CardDescription>Complete heritage activities and earn coins</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Learn a traditional dance move</li>
                  <li>• Create a handicraft piece</li>
                  <li>• Share a cultural story</li>
                  <li>• Attend a virtual workshop</li>
                </ul>
                <Button className="w-full mt-4 bg-primary hover:bg-primary/90">Start Challenge</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 hover:border-secondary/40 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🪙</span>
                  Reward System
                </CardTitle>
                <CardDescription>Redeem {t("coins")} for amazing prizes</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Handcrafted art pieces</li>
                  <li>• Workshop vouchers</li>
                  <li>• Cultural tour packages</li>
                  <li>• Exclusive collectibles</li>
                </ul>
                <Button variant="outline" className="w-full mt-4 bg-transparent">
                  View {t("rewards")}
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20 hover:border-accent/40 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">👥</span>
                  {t("community")}
                </CardTitle>
                <CardDescription>Connect with fellow heritage enthusiasts</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Join discussion forums</li>
                  <li>• Share your creations</li>
                  <li>• Find local artisans</li>
                  <li>• Participate in events</li>
                </ul>
                <Button variant="outline" className="w-full mt-4 bg-transparent">
                  Join {t("community")}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Impact</h2>
            <p className="text-muted-foreground">Join thousands in preserving India's cultural heritage</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Art Forms Documented</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">28</div>
              <div className="text-sm text-muted-foreground">States Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-sm text-muted-foreground">Workshops Conducted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Begin Your Heritage Journey?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our community of cultural enthusiasts and help preserve India's rich traditions for future generations
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none">
              <Link href="/auth/register">Get Started Today</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">{t("learnMore")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
