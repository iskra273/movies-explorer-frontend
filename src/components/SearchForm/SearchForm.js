import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
    return (
        <section className="searchform">
            <div className="searchform__filterCheckBox">
                <div className="searchform__container">
                    <button type="submit" className="searchform__icon"/>
                    <form className="searchform__input-container">
                        <label className="searchform__form"> 
                            <input
                                type="text"
                                required
                                className="searchform__input"
                                placeholder="Фильм"
                            />
                        </label>
                    </form>
                    <div className="searchform__find-container">
                        <button type="submit" className="searchform__find"/>
                    </div>
                    <span className="searchform__separator"></span>
                </div>
                <FilterCheckbox/>
            </div>
            <div className="searchform__line" ></div>
        </section>   
    );
}

export default SearchForm;