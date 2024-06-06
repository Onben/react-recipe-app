import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import RecipeDetail from './RecipeDetail';

jest.mock('axios');

describe('RecipeDetail component', () => {

    // test("should render Ingredient component", () => {
    //     render(<RecipeDetail />);
    //     const IngredientElement = screen.getByTestId("Ingredient-selector");
    //     expect(IngredientElement).toBeInTheDocument();
    // });

    test('renders recipe details after successful fetch', async () => {
        const recipeData = {
            id: '1',
            name: 'Test Recipe',
            image: 'test.jpg',
            ingredients: ['Ingredient 1', 'Ingredient 2'],
            steps: ['Step 1', 'Step 2']
        };

        axios.get.mockResolvedValueOnce({ data: recipeData });

        render(
            <BrowserRouter>
                <RecipeDetail />
            </BrowserRouter>
        );

        await waitFor(() => {

            expect(screen.getByText(recipeData.name)).toBeInTheDocument();
            expect(screen.getByText(recipeData.ingredients[0])).toBeInTheDocument();
            expect(screen.getByText(recipeData.steps[0])).toBeInTheDocument();
        });
    });

});
