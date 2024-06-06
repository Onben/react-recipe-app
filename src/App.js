import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import RecipeList from './components/Recipe/RecipeList';
import RecipeDetail from './components/Recipe/RecipeDetail';
import './index.css';

const ThemedApp = () => {
  const { theme } = useTheme();
  return (
    <div className={`flex flex-col h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <Router>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
          </Routes>
        </Main>
        <Footer />
      </Router>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
};

export default App;