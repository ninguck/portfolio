export default function Footer() {
    return (
        <footer className="w-full py-6 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-600 dark:text-gray-400">
            <p>
            © {new Date().getFullYear()} Nicholas Nguyen. Built with ❤️ using Next.js and Tailwind CSS.
            </p>
        </footer>
    )
}