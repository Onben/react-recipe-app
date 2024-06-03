import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import RecipeList from './components/Recipe/RecipeList';
import RecipeDetail from './components/Recipe/RecipeDetail';

const App = () => {
  return (
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
  );
};

export default App;
