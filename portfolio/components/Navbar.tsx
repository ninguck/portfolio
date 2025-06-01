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
        <nav className="fixed top-2 left-1/2 transform -translate-x-1/2 w-[96vw] max-w-3xl z-50 rounded-xl shadow-md border border-white/30 dark:border-gray-700 backdrop-blur-lg bg-white/60 dark:bg-gray-900/60 px-3 py-1 flex flex-col">
            <div className="flex justify-between items-center h-10">
                {/* Desktop Navigation */}
                <div className="flex-1 flex justify-center">
                    <div className="flex space-x-4">
                        {['home', 'about', 'projects', 'contact'].map((id) => (
                            <button
                                key={id}
                                onClick={() => handleClick(id)}
                                className="relative px-2 py-1 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-blue-100/60 dark:hover:bg-blue-900/30 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 dark:focus-visible:ring-blue-600 text-gray-800 dark:text-gray-200"
                            >
                                <span className="transition-colors duration-200 group-hover:text-blue-600 capitalize">{id}</span>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="flex items-center space-x-1">
                    <div className="rounded-lg bg-gray-100/60 dark:bg-gray-800/60 p-0.5 shadow-inner flex items-center">
                        <Button variant="ghost" size="icon" onClick={toggleTheme} className="transition-all duration-200 rounded-lg hover:bg-blue-100/60 dark:hover:bg-blue-900/30">
                            {isDark ? <Sun className="h-4 w-4 text-yellow-400" /> : <Moon className="h-4 w-4 text-blue-500" />}
                        </Button>
                    </div>
                    {/* Mobile menu button */}
                    <Button variant="ghost" size="icon" className="md:hidden transition-all duration-200 rounded-lg hover:bg-blue-100/60 dark:hover:bg-blue-900/30" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                    </Button>
                </div>
            </div>
            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-white/95 dark:bg-gray-900/95 rounded-xl mt-2 shadow-md border border-white/30 dark:border-gray-700">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {['home', 'about', 'projects', 'contact'].map((id) => (
                            <button
                                key={id}
                                onClick={() => handleClick(id)}
                                className="block px-3 py-2 text-sm font-medium rounded-lg hover:bg-blue-100/60 dark:hover:bg-blue-900/30 transition-all duration-200 capitalize w-full text-left"
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