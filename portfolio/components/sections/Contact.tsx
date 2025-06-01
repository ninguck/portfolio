"use client"

import { Mail, Github, Linkedin } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Contact() {
    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">Get In Touch</h2>
                <div className="grid lg:grid-cols-5 gap-8">
                    {/* Contact Info Cards */}
                    <div className="lg:col-span-2 flex flex-col h-full">
                        <Card className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                            <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-8">
                                I'm always interested in hearing about new opportunities, interesting projects, or just having a chat about technology and design.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                                        <Mail className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-medium">Email</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">nicholas.nguyen@email.com</p>
                                    </div>
                                </div>
                                <Link
                                    href="https://linkedin.com"
                                    className="flex items-center gap-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors group"
                                >
                                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Linkedin className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-medium">LinkedIn</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">Connect with me</p>
                                    </div>
                                </Link>
                                <Link
                                    href="https://github.com"
                                    className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                                >
                                    <div className="w-12 h-12 rounded-full bg-gray-800 dark:bg-gray-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Github className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-medium">GitHub</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">Check out my code</p>
                                    </div>
                                </Link>
                            </div>
                        </Card>
                    </div>
                    {/* Contact Form */}
                    <div className="lg:col-span-3 flex flex-col h-full">
                        <Card className="p-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow h-full flex flex-col">
                            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Name</label>
                                        <Input placeholder="Your Name" className="h-12" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Email</label>
                                        <Input type="email" placeholder="Your Email" className="h-12" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Subject</label>
                                    <Input placeholder="What's this about?" className="h-12" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Message</label>
                                    <Textarea placeholder="Tell me about your project or just say hello!" rows={6} />
                                </div>
                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                                >
                                    Send Message
                                </Button>
                            </form>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}