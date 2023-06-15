import ExtraSection from "../../ExtraSection";
import PopularClasses from "../../PopularClass";
import PopularInstractor from "../../PopularInstractor";
import Banner from "../Banner";




const Home = () => {
    return (
        <div>
          <Banner></Banner>
           <ExtraSection></ExtraSection>
           <PopularClasses></PopularClasses>
           <PopularInstractor></PopularInstractor>
        </div>
    );
};

export default Home;