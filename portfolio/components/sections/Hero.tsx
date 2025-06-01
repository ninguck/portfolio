"use client"

import { Button } from "@/components/ui/button"

interface HeroProps {
    scrollToSection: (sectionId: string) => void
}

export default function Hero({ scrollToSection }: HeroProps) {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center overflow-hidden">
            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                    Nicholas Nguyen
                </h1>
                <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-4">
                    Software Engineer
                </p>
                <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8">
                    Building digital experiences that bridge creativity and functionality
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                    onClick={() => scrollToSection("projects")}
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700"
                >
                    View My Work
                </Button>
                <Button
                    onClick={() => scrollToSection("contact")}
                    variant="outline"
                    size="lg"
                >
                    Get In Touch
                </Button>
                </div>
            </div>
        </section>
    )
}