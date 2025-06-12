"use client"

import { Mail, Github, Linkedin } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

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
                                        <p className="text-sm text-gray-600 dark:text-gray-300">nicholasvannguyen@yahoo.com.au</p>
                                    </div>
                                </div>
                                <Link
                                    href="https://www.linkedin.com/in/nicholas-nguyen-456928322/"
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
                                    href="https://github.com/ninguck"
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
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Name</label>
                                        <Input 
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your Name" 
                                            className="h-12" 
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Email</label>
                                        <Input 
                                            name="email"
                                            type="email" 
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Your Email" 
                                            className="h-12" 
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Subject</label>
                                    <Input 
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="What's this about?" 
                                        className="h-12" 
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Message</label>
                                    <Textarea 
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell me about your project or just say hello!" 
                                        rows={6} 
                                        required
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                                    disabled={status === 'loading'}
                                >
                                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                                </Button>
                                {status === 'success' && (
                                    <p className="text-green-600 text-center">Message sent successfully!</p>
                                )}
                                {status === 'error' && (
                                    <p className="text-red-600 text-center">Failed to send message. Please try again.</p>
                                )}
                            </form>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}