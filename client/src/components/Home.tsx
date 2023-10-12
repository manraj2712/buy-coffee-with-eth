import { State } from "../types";
import Buy from "./Buy";
import Description from "./Description";
import Hero from "./Hero";
import RecentSupporters from "./RecentSupporters";

const Home = ({ state }: { state: State }) => {
  return (
    <div className="mb-10">
      <Hero imageUrl="https://cdn.buymeacoffee.com/uploads/cover_images/2021/09/03e03f39271bd786d700028c19b80f69.jpg@1950w_0e.webp" />
      <div>
        <div className="lg:flex px-5 md:px-20 gap-6 mt-16">
          <div className="lg:w-1/3 mb-5 lg:mb-0">
            <Buy state={state} />
          </div>
          <div className="lg:w-2/3 lg:order-first">
            <Description />
            <RecentSupporters state={state} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
