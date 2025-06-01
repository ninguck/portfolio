"use client"

import Image from "next/image"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function About() {
    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">About Me</h2>

                {/* Main Grid */}
                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                {/* Profile Card */}
                <Card className="p-6 h-full !bg-white dark:!bg-gray-900 border-0 shadow-lg">
                    <div className="text-center">
                        <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500 p-1">
                            <div className="w-full h-full rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                            <Image
                                src="/placeholder.svg?height=128&width=128"
                                alt="Nicholas Nguyen"
                                width={128}
                                height={128}
                                className="w-full h-full object-cover"
                            />
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Nicholas Nguyen</h3>
                        <p className="text-blue-600 dark:text-blue-400 mb-4">Full-Stack Developer</p>
                        <Button className="w-full flex items-center justify-center gap-2">
                            <Download className="h-4 w-4" />
                            Download Resume
                        </Button>
                    </div>
                </Card>

                {/* Story Cards */}
                <div className="lg:col-span-2 space-y-6">
                    {[
                        {
                            emoji: "🚀",
                            title: "My Journey",
                            text:
                            "I'm a passionate software engineer with a love for creating meaningful digital experiences. With a background in full-stack development, I enjoy working at the intersection of design and technology to build solutions that make a real impact.",
                        },
                        {
                            emoji: "💡",
                            title: "What Drives Me",
                            text:
                            "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee while sketching out ideas for my next project.",
                        },
                        {
                            emoji: "🎯",
                            title: "My Philosophy",
                            text:
                            "I believe in writing clean, maintainable code and creating user experiences that are both beautiful and functional. Let's build something amazing together!",
                        },
                    ].map((item, index) => (
                    <Card
                        key={index}
                        className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 !bg-white dark:!bg-gray-900"
                    >
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-blue-200 dark:bg-blue-800 flex items-center justify-center flex-shrink-0 text-2xl">
                                {item.emoji}
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.text}</p>
                            </div>
                        </div>
                    </Card>
                    ))}
                </div>
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                {[
                    {
                    icon: "⚡",
                    title: "Frontend",
                    tech: "React, Next.js, TypeScript, Tailwind CSS",
                    },
                    {
                    icon: "🔧",
                    title: "Backend",
                    tech: "Node.js, Python, PostgreSQL, MongoDB",
                    },
                    {
                    icon: "☁️",
                    title: "Cloud & Tools",
                    tech: "AWS, Docker, Git, CI/CD",
                    },
                ].map((item, index) => (
                    <Card
                    key={index}
                    className="p-6 text-center hover:shadow-lg transition-all duration-300 group !bg-white dark:!bg-gray-900"
                    >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-200 dark:bg-blue-800 flex items-center justify-center group-hover:scale-110 transition-transform text-3xl">
                        {item.icon}
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{item.tech}</p>
                    </Card>
                ))}
                </div>
            </div>
        </section>
    )
}