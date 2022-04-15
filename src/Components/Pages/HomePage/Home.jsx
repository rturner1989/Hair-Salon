import HomeHeader from "./HomeHeader";
import TileSection from "./TileSection";
import ReviewSection from "./ReviewSection";
import Flip from "../../Flip/Flip";

const HomePage = () => {
    return (
        <main className="homePage">
            <HomeHeader />
            <Flip delay={200} />
            <Flip delay={400} />
            <Flip delay={600} />
            <TileSection />
            <ReviewSection />
        </main>
    );
};

export default HomePage;
