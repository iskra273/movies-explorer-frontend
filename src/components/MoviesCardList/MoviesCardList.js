import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import image_1 from '../../images/pic__COLOR_pic_1.png';
import image_2 from '../../images/pic__COLOR_pic_2.png';
import image_3 from '../../images/pic__COLOR_pic_3.png';
import image_4 from '../../images/pic__COLOR_pic_4.png';
import image_5 from '../../images/pic__COLOR_pic_5.png';
import image_6 from '../../images/pic__COLOR_pic_6.png';
import image_7 from '../../images/pic__COLOR_pic_7.png';
import image_8 from '../../images/pic__COLOR_pic_8.png';
import image_9 from '../../images/pic__COLOR_pic_9.png';
import image_10 from '../../images/pic__COLOR_pic_10.png';
import image_11 from '../../images/pic__COLOR_pic_11.png';
import image_12 from '../../images/pic__COLOR_pic_12.png';

function MoviesCardList() {
  return (
    <section className="moviesCardList">
      <ul className="moviesCardList__list">
        <MoviesCard
          image={image_1}
          title={'33 слова о дизайне'}
          duration={'1ч 47м'} 
        />
        <MoviesCard
          image={image_2}
          title={'33 слова о дизайне'}
          duration={'1ч 47м'} 
        />
        <MoviesCard
          image={image_3}
          title={'33 слова о дизайне'}
          duration={'1ч 47м'} 
        />
        <MoviesCard
          image={image_4}
          title={'33 слова о дизайне'}
          duration={'1ч 47м'} 
        />
        <MoviesCard
          image={image_5}
          title={'33 слова о дизайне'}
          duration={'1ч 47м'} 
        />
        <MoviesCard
          image={image_6}
          title={'33 слова о дизайне'}
          duration={'1ч 47м'} 
        />
        <MoviesCard
          image={image_7}
          title={'33 слова о дизайне'}
          duration={'1ч 47м'} 
        />
        <MoviesCard
          image={image_8}
          title={'33 слова о дизайне'}
          duration={'1ч 47м'} 
        />
        <MoviesCard
          image={image_9}
          title={'33 слова о дизайне'}
          duration={'1ч 47м'} 
        />
        <MoviesCard
          image={image_10}
          title={'33 слова о дизайне'}
          duration={'1ч 47м'} 
        />
        <MoviesCard
          image={image_11}
          title={'33 слова о дизайне'}
          duration={'1ч 47м'} 
        />
        <MoviesCard
          image={image_12}
          title={'33 слова о дизайне'}
          duration={'1ч 47м'} 
        />
      </ul>
      <div className="moviesCardList__button-container">
        <button className="moviesCardList__button" type="button" name="more">Ещё</button>
      </div>   
    </section>
  );
}

export default MoviesCardList;