"use client"

import { Github, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface Project {
    name: string
    description: string
    stack: string[]
    image: string
    github?: string
    demo?: string
    featured?: boolean
}

const projects: Project[] = [
    {
        name: "Smart Glasses AI Assistant",
        description:
        "A voice-powered personal assistant built into smart glasses with real-time command execution, voice-to-text, and AI integration.",
        stack: ["Next.js", "TypeScript", "Python", "LLM", "Supabase"],
        image: "/projects/smart-glasses.png",
        github: "https://github.com/yourusername/smart-glasses",
        demo: "https://demo-link.com",
        featured: true,
    },
    {
        name: "FoodCalorieApp",
        description: "A full-featured Android app for calorie tracking, meal logging, and photo uploads.",
        stack: ["Java", "RoomDB", "Firebase"],
        image: "/projects/foodcalorie.png",
        github: "https://github.com/yourusername/foodcalorie",
    },
    {
        name: "Portfolio Website",
        description: "This exact website, built to showcase my work and skills as a developer.",
        stack: ["Next.js", "Tailwind CSS", "TypeScript"],
        image: "/projects/portfolio.png",
        github: "https://github.com/yourusername/portfolio",
    },
]

export default function Projects() {
    const featured = projects.find((p) => p.featured)
    const others = projects.filter((p) => !p.featured)

    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">Featured Projects</h2>

                {/* Featured Project */}
                {featured && (
                    <div className="mb-16">
                        <Card className="overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 group">
                            <div className="md:flex">
                                <div className="md:w-1/2 bg-gradient-to-br from-blue-500 to-purple-600 p-8 flex items-center justify-center">
                                    <div className="text-white text-center">
                                        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                                            <span className="text-4xl">🚀</span>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2">Featured Project</h3>
                                        <p className="text-blue-100">My latest and greatest work</p>
                                    </div>
                                </div>
                                <div className="md:w-1/2 p-8">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-2xl font-bold">{featured.name}</h3>
                                        <div className="flex gap-2">
                                            {featured.github && (
                                                <Link href={featured.github} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                                    <Github className="h-5 w-5" />
                                                </Link>
                                            )}
                                            {featured.demo && (
                                                <Link href={featured.demo} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                                    <ExternalLink className="h-5 w-5" />
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 mb-6">{featured.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {featured.stack.map((tech, techIndex) => (
                                            <Badge
                                                key={techIndex}
                                                variant="secondary"
                                                className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                )}

                {/* Other Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {others.map((project, index) => (
                        <Card
                            key={index}
                            className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                        >
                            <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-white/90 dark:bg-gray-800/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <span className="text-2xl">💻</span>
                                    </div>
                                </div>
                                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    {project.github && (
                                        <Link href={project.github} className="p-2 rounded-full bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 transition-colors">
                                            <Github className="h-4 w-4" />
                                        </Link>
                                    )}
                                    {project.demo && (
                                        <Link href={project.demo} className="p-2 rounded-full bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 transition-colors">
                                            <ExternalLink className="h-4 w-4" />
                                        </Link>
                                    )}
                                </div>
                            </div>
                            <CardHeader>
                                <CardTitle className="text-lg">{project.name}</CardTitle>
                                <CardDescription className="text-sm">{project.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-1">
                                    {project.stack.map((tech, techIndex) => (
                                        <Badge key={techIndex} variant="outline" className="text-xs">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}