import Header from "./components/Header/Header";
import "../src/app.scss";
import Card1 from "../src/assets/images/card1.png";
import Card2 from "../src/assets/images/card2.png";
import Card3 from "../src/assets/images/card3.png";
import Card4 from "../src/assets/images/card4.png";
import CardSection from "./components/CardSection/CardSection";
import ImageCard from "./components/ImageCard/ImageCard";

export type cardData = {
  image?: string,
  title?: string,
  subtitle?: string,
};

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
        <ImageCard/>
      </div>
    </div>
  );
};

export default App;
