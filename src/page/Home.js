import "swiper/css";
import Homeslide from "./module/slidehome";
import Benifit from "./module/Benifit";
import Package from "./module/Package";
import Aboutclub from "./module/aboutclub";
import Pillar from "./module/Pillars";

const Home = () => {
  return (
    <>
      <Homeslide />
      <Benifit />
      <Package />
      <Aboutclub />
      <Pillar />
      <p className="App">Herbal life</p>
    </>
  );
};
export default Home;
