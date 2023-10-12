import { State } from "../types";
import Buy from "./Buy";
import Description from "./Description";
import Hero from "./Hero";
import RecentSupporters from "./RecentSupporters";

const Home = ({ state }: { state: State }) => {
  return (
    <div className="mb-10">
      <Hero imageUrl="https://cdn.buymeacoffee.com/uploads/cover_images/2021/09/03e03f39271bd786d700028c19b80f69.jpg@1950w_0e.webp" />
      <div className="z-10">
        <div className="rounded-full -mt-28 h-40 w-40 mx-auto border-4 border-black">
          <img
            className="object-cover rounded-full w-full h-full"
            src="https://cdn.buymeacoffee.com/uploads/profile_pictures/2021/10/ac7015e6f13636e13fb1db44bd92d1a8.jpg@300w_0e.webp"
          ></img>
        </div>
        <div className="px-4 text-center">
          <p className="text-3xl font-bold">Manraj Singh</p>
          <p className="text-lg font-normal">is a Passionate programmer</p>
          <p className="text-lg font-semibold text-gray-600">554 supporters</p>
        </div>
        <div className="md:flex px-20 gap-6 mt-16">
          <div className="md:w-2/3">
            <Description />
            <RecentSupporters state={state} />
          </div>
          <Buy state={state} />
        </div>
      </div>
    </div>
  );
};

export default Home;
