import Profile from "./Profile";

const Hero = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div>
      <img
        className="object-cover px-3 h-[calc(100vw/5.8)] w-full py-2"
        src={imageUrl}
      ></img>
      <Profile />
    </div>
  );
};

export default Hero;
