import { cardData } from '../../App';
import Icon1 from '../../assets/images/icon1.svg'
import Icon2 from '../../assets/images/icon2.png'
import './ImageCard.scss';
interface Data{
    data:cardData
}
const ImageCard:React.FC<Data> = ({data}) => {
    return (
        <>
            <div className='image-card'>
            <img src={data.image} alt="" />
            <h1>Modern Psychology</h1>
            <p>Designation</p>
            <button>Buy Course</button>
            <div className='image-card__footer'>
                    <div className='image-card__footer__left'> 
                    <img src={Icon1} alt="" />
                    <p>Start 20 April, 2021</p>
                    </div>
                    <div className='image-card__footer__right'> 
                    <img src={Icon2} alt="" />
                    <p>60 seats</p>
                    </div>
            </div>
        </div> 
        </>

    );
};

export default ImageCard;