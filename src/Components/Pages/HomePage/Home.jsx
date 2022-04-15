import HomeHeader from "./HomeHeader";
import TileSection from "./TileSection";
import ReviewSection from "./ReviewSection";
import Flip from "../../Flip";

const HomePage = () => {
    return (
        <main className="homePage">
            <HomeHeader />
            <Flip />
            <TileSection />
            <ReviewSection />
        </main>
    );
};

export default HomePage;
