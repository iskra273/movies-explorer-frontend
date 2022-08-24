import React from 'react';
import './SavedMovies.css';
import '../MoviesCard/MoviesCard.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';


function SavedMovies() {
    return (
        <section className="savedMovies">
            <MoviesCardList/> 
            <Footer />
        </section>
    );
}

export default SavedMovies;
