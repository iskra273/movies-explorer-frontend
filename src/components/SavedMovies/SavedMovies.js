import React from 'react';
import './SavedMovies.css';
import '../MoviesCard/MoviesCard.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';


function SavedMovies() {
    return (
        <section className="savedMovies">
            <SearchForm />
            <MoviesCardList/> 
        </section>
    );
}

export default SavedMovies;
