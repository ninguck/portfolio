"use client";

import {useState} from "react";
import {Moon, Sun, Menu, X} from "lucide-react";
import {Button} from "@/components/ui/button";


interface NavbarProps {
    isDark : boolean;
    toggleTheme: () => void;
    scrollToSection: (sectionId: string) => void;
}

export default function Navbar({isDark, toggleTheme, scrollToSection}: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClick = (section: string) => {
        scrollToSection(section)
        setIsMenuOpen(false);
    }

    return (
        <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="font-bold text-xl">Nicholas Nguyen</div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {["home", "about", "projects", "contact"].map((id) => (
                        <button
                            key={id}
                            onClick={() => handleClick(id)}
                            className="hover:text-blue-600 transition-colors capitalize"
                        >
                            {id}
                        </button>
                        ))}
                    </div>

                    <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="icon" onClick={toggleTheme}>
                        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                        </Button>

                        {/* Mobile menu button */}
                        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {["home", "about", "projects", "contact"].map((id) => (
                        <button
                            key={id}
                            onClick={() => handleClick(id)}
                            className="block px-3 py-2 text-base font-medium hover:text-blue-600 transition-colors capitalize"
                        >
                            {id}
                        </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}