import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa'; 

export default function Header() {
    const { theme, toggleTheme } = useTheme();
    return (
        <header className={`p-4 text-white flex justify-between items-center ${theme === 'dark' ? 'bg-gray-800 ' : 'bg-cyan-500'}`}>
            <nav>
                <Link to="/" className="text-2xl font-bold tracking-wide font-poppins">All Recipes</Link>
            </nav>
            <button
                onClick={toggleTheme}
                className="flex items-center p-2 rounded-full bg-orange-200 dark:bg-gray-600 hover:bg-orange-300 dark:hover:bg-gray-700"
            >
                {theme === 'light' ? <FaMoon className="w-6 h-6" /> : <FaSun className="w-6 h-6" />}
                <span className="ml-2">{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
            </button>
        </header>
    );
}
