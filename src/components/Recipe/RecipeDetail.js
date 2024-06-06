import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function RecipeDetail() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3001/recipes/${id}`)
            .then(response => {
                setRecipe(response.data);
            })
            .catch(error => {
                console.error('Error fetching the recipe:', error);
            });
    }, [id]);

    if (!recipe) {
        return <div>Loading...</div>;
    }

    return (
        <div className="border p-4 rounded-lg">
            <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover rounded-lg" />
            <h2 className="text-lg font-bold mt-2">{recipe.name}</h2>
            <h3 data-testid="Ingredient-selector" className="text-md font-semibold mt-4">Ingredients</h3>
            <ul className="list-disc ml-6">
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h3 className="text-md font-semibold mt-4">Steps</h3>
            <ol className="list-decimal ml-6">
                {recipe.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ol>
        </div>
    )
}