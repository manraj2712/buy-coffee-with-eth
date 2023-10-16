const Hero = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div>
      <img
        className="object-cover px-3 h-[calc(100vw/3)]  md:h-[calc(100vw/5.8)] w-full py-2 z-0"
        src={imageUrl}
      ></img>
      <div className="relative rounded-full -mt-14 lg:-mt-28 h-24 w-24 lg:h-44 lg:w-44 mx-auto border-4 lg:border-8 border-white z-10">
        <img
          className="object-cover rounded-full w-full h-full"
          src="/profile-avatar.jpeg"
        ></img>
      </div>
      <div className="px-4 text-center">
        <p className="text-3xl font-bold">Manraj Singh</p>
        <p className="text-lg font-normal">is a Passionate programmer</p>
        <p className="text-lg font-semibold text-gray-500">554 supporters</p>
      </div>
    </div>
  );
};

export default Hero;
