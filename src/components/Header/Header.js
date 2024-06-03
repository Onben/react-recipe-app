import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="bg-cyan-500 p-4 text-white">
            <nav>
                <Link to="/" className="text-2xl font-bold tracking-wide font-poppins">All Recipes</Link>
            </nav>
        </header>
    )
}

