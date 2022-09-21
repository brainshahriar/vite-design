import React from 'react';
import { cardData } from '../../App';
import './CardSection.scss';
interface cardProps {
    data:cardData;
  }
const CardSection:React.FC<cardProps>= ({data}) => { 
    return (
            <div className='card__single'>
                <img src={data.image} alt="" />
                <p className='card__single__title'>{data.title}</p>
                <p className='card__single__sub-title'>{data.subtitle}</p>
            </div>
    );
};

export default CardSection;