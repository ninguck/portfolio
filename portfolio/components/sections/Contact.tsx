"use client"

import { Mail, Github, Linkedin } from "lucide-react"

export default function Contact() {
    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Get In Touch</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
                I'm currently open to new opportunities — whether it's a full-time role, freelance work, or collaboration. Feel free to reach out!
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                    <a
                        href="mailto:nicholas@example.com"
                        className="flex items-center gap-2 text-blue-600 hover:underline"
                    >
                        <Mail className="w-5 h-5" />
                        nicholas@example.com
                    </a>
                    <a
                        href="https://www.linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:underline"
                    >
                        <Linkedin className="w-5 h-5" />
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:underline"
                    >
                        <Github className="w-5 h-5" />
                        GitHub
                    </a>
                </div>
            </div>
        </section>
    )
}