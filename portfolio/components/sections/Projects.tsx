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
    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">Featured Projects</h2>
                <div className="mb-16">
                    <div className="overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg rounded-lg p-8 flex flex-col items-center">
                        <div className="w-32 h-32 mb-6 bg-gray-200 dark:bg-gray-800 animate-pulse rounded-lg flex items-center justify-center">
                            {/* Skeleton image placeholder */}
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-center">Projects coming soon</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-center">I'm working on some awesome projects. Stay tuned!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}