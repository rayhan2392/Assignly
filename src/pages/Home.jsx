import Banner from "../layouts/Banner";
import Faq from "../layouts/Faq";
import Featured from "../layouts/Featured";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Featured></Featured>
           <Faq></Faq>
        </div>
    );
};

export default Home;