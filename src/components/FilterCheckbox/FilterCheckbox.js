import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
    return (
        <div className="filterCheckBox">
            <label className="filterCheckBox__container">
                <input
                    type="checkbox"
                    className="filterCheckBox__checkbox-invisible"
                />
                <span className="filterCheckBox__checkbox-pseudo radius"></span>                
            </label>
            <p className="filterCheckBox__checkbox-label">Короткометражки</p>
        </div>
       
    )
}

export default FilterCheckbox;