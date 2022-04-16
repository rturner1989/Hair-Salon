import HomeHeader from "./HomeHeader";
import TileSection from "./TileSection";
import ReviewSection from "./ReviewSection";
import Flip from "../../Flip/Flip";

const HomePage = () => {
    return (
        <main className="homePage">
            <HomeHeader />
            <TileSection />
            <ReviewSection />
        </main>
    );
};

export default HomePage;
