import HeroSection from "../components/home/HeroSection";
import Restaurant from "../components/home/Restaurant";
import TodaysSpecials from "../components/home/TodaysSpecials";
import Reservation from "../components/common/Reservation";
import FeaturesSection from "../components/home/FeaturesSection";
import Menu from "../components/common/Menu";
import QuoteSlider from "../components/common/QuoteSlider";
import InstagramSubscribe from "../components/common/InstagramSubscribe ";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Restaurant />
      <TodaysSpecials />
      <Reservation />
      <FeaturesSection />
      <Menu />
      <QuoteSlider />
      <InstagramSubscribe />
    </>
  );
};

export default Home;
