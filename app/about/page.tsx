"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-amber-50 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6 text-balance bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 dark:from-purple-400 dark:via-pink-400 dark:to-amber-400">
            About Heritage India
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Preserving and celebrating the rich cultural heritage of India through interactive experiences, community engagement, and digital innovation.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-2 border-purple-200 dark:border-purple-800 bg-white/80 dark:bg-slate-800/80 backdrop-blur hover:shadow-lg transition-all">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl">
                  🎯
                </div>
                <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400">Our Mission</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                To document, preserve, and revitalize India's diverse cultural heritage through digital platforms, community engagement, and educational initiatives.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">✦</span>
                  <span>Documenting traditional art forms across all 28 states</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">✦</span>
                  <span>Creating interactive learning experiences for cultural education</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">✦</span>
                  <span>Supporting artisans and cultural practitioners</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-pink-200 dark:border-pink-800 bg-white/80 dark:bg-slate-800/80 backdrop-blur hover:shadow-lg transition-all">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-amber-500 flex items-center justify-center text-white text-2xl">
                  🔭
                </div>
                <h2 className="text-2xl font-bold text-pink-600 dark:text-pink-400">Our Vision</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                A world where India's cultural heritage is accessible, appreciated, and actively practiced by future generations through innovative digital platforms.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-pink-500">✦</span>
                  <span>Building the world's most comprehensive digital archive of Indian heritage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500">✦</span>
                  <span>Creating a global community of heritage enthusiasts and practitioners</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500">✦</span>
                  <span>Ensuring traditional knowledge is passed to future generations</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Approach</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine traditional knowledge with modern technology to create engaging experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/90 dark:bg-slate-800/90 hover:shadow-md transition-shadow border-amber-200 dark:border-amber-800">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center text-white text-2xl mb-4">
                  🧠
                </div>
                <h3 className="font-semibold text-amber-600 dark:text-amber-400 mb-2">Documentation & Research</h3>
                <p className="text-sm text-muted-foreground">
                  Working with cultural experts, historians, and communities to document authentic traditions and practices.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 dark:bg-slate-800/90 hover:shadow-md transition-shadow border-purple-200 dark:border-purple-800">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-violet-400 flex items-center justify-center text-white text-2xl mb-4">
                  🌐
                </div>
                <h3 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Digital Preservation</h3>
                <p className="text-sm text-muted-foreground">
                  Creating interactive digital archives, 3D models, and immersive experiences to preserve cultural artifacts.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 dark:bg-slate-800/90 hover:shadow-md transition-shadow border-pink-200 dark:border-pink-800">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 flex items-center justify-center text-white text-2xl mb-4">
                  👥
                </div>
                <h3 className="font-semibold text-pink-600 dark:text-pink-400 mb-2">Community Engagement</h3>
                <p className="text-sm text-muted-foreground">
                  Building platforms for artisans, practitioners, and enthusiasts to connect, share, and collaborate.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A diverse group of heritage enthusiasts, technologists, and cultural experts
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                name: "Priya Sharma",
                role: "Founder & Cultural Director",
                bio: "Cultural anthropologist with 15+ years of experience in heritage conservation",
                avatar: "👩🏽‍💼",
              },
              {
                name: "Arjun Mehta",
                role: "Technology Lead",
                bio: "Tech innovator focused on creating immersive digital experiences",
                avatar: "👨🏽‍💻",
              },
              {
                name: "Lakshmi Rao",
                role: "Artisan Relations",
                bio: "Working directly with craftspeople across India to document techniques",
                avatar: "👩🏽‍🎨",
              },
              {
                name: "Vikram Singh",
                role: "Education Programs",
                bio: "Developing curriculum and workshops for schools and universities",
                avatar: "👨🏽‍🏫",
              },
            ].map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-white/80 dark:bg-slate-800/80 backdrop-blur">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3 mx-auto">{member.avatar}</div>
                  <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
                  <Badge variant="outline" className="mb-2">{member.role}</Badge>
                  <p className="text-xs text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Join Our Mission</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be part of the movement to preserve and celebrate India's rich cultural heritage
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none">
              <Link href="/auth/register">Join Our Community</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-purple-300 dark:border-purple-700">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}