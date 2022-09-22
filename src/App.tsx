import Header from "./components/Header/Header";
import "../src/app.scss";
import Card1 from "../src/assets/images/card1.png";
import Card2 from "../src/assets/images/card2.png";
import Card3 from "../src/assets/images/card3.png";
import Card4 from "../src/assets/images/card4.png";
import image1 from '../src/assets/images/image1.png'
import image2 from '../src/assets/images/image2.png'
import image3 from '../src/assets/images/image3.png'
import Man from '../src/assets/images/man.png';
import CardSection from "./components/CardSection/CardSection";
import ImageCard from "./components/ImageCard/ImageCard";
import Footer from "./components/Footer/Footer";

export type cardData = {
  image?: string,
  title?: string,
  subtitle?: string,
};

export type imageCard = {
  image:string;
}
const data2:imageCard[] = [{
  image:image1,
},
{
  image:image2
},
{
  image:image3
}]

const data1: cardData[] = [
  {
    image: Card1,
    title: "1500+ Topic",
    subtitle: "Learn Anythings",
  },
  {
    image: Card2,
    title: "1800+ Students",
    subtitle: "Learn Anythings",
  },
  {
    image: Card3,
    title: "9K+ Test Token",
    subtitle: "Learn Anythings",
  },
  {
    image: Card4,
    title: "2000+ Student",
    subtitle: "Learn Anythings",
  },
];

const App:React.FC = () => {
  return (
    <div className="body">
      <Header />
      <div className="card">
      {
        data1.map((item:cardData,i:number)=>
          <CardSection key={i} data={item} />
        )
      }
      </div>
        <h1>Online Courses</h1>
        <div className="image-card-div">
        {
          data2 && data2.map((item2:imageCard,i:number)=><ImageCard key={i} data={item2}/>)
        }
      </div>
      <h1>Testimonial</h1>
      <div className="testimonial-div">
          <img src={Man} alt="" />
          <p>There are many variations of passages of Lorem Ipsum available, but the
          majority have suffered alteration in some form, by injected humour, 
          or randomised words which don't look even slightly believable.</p>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
