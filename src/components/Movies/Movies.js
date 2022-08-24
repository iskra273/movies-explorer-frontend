import React from 'react';
import './Movies.css';
import '../Header/Header.css'
import SearchForm from '../SearchForm/SearchForm';
// import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';


function Movies() {
    return (
        <section className="movies">
            <SearchForm />
            <MoviesCardList/>
            {/* <Preloader /> */}
            <Footer />
        </section>
    );
}

export default Movies;
