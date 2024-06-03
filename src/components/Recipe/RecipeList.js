import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function RecipeList() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/recipes')
            .then(response => {
                setRecipes(response.data);
            })
            .catch(error => {
                console.error('Error fetching the recipes:', error);
            });
    }, []);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recipes.map(recipe => (
                <div key={recipe.id} className="border p-4 rounded-lg text-center">
                    {/* <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover rounded-lg" /> */}
                    <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover rounded-lg max-w-48 max-h-48 mx-auto" />
                    <h2 className="text-lg font-bold mt-2">{recipe.name}</h2>
                    <Link to={`/recipe/${recipe.id}`} className="text-blue-500">View Recipe</Link>
                </div>
            ))}
        </div>
    )
}

