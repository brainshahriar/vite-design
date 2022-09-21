import './HeaderBody.scss'
import Hero from '../../../assets/images/hero.png'

const Headerbody:React.FC = () => {
    return (
        <>
            <section className="leftbody">
                <p>Are you ready to Learn?</p>
                <div className='leftbody__title'>
                    Learn With fun on <span>any schedule</span>
                </div>
                <div className='leftbody__paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius blandit facilisis quam netus.</div>
                <button>Get Started</button>
            </section>
            <section className='rightbody'>
                <img src={Hero} alt="" />
            </section>
        </>
    );
};

export default Headerbody;