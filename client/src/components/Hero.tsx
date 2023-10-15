const Hero = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className="z-0">
      <img
        className="object-cover px-3 h-[calc(100vw/5.8)] w-full py-2"
        src={imageUrl}
      ></img>
      <div className="rounded-full -mt-14 lg:-mt-28 h-28 w-28 lg:h-40 lg:w-40 mx-auto">
        <img
          className="object-cover rounded-full w-full h-full border-4 border-black"
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
