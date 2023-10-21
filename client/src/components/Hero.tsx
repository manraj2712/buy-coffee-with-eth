const Hero = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div>
      <img
        className="object-cover px-3 h-[calc(100vw/3)]  md:h-[calc(100vw/4.8)] 2xl:h-[calc(100vw/5.8)] w-full py-2 z-0"
        src={imageUrl}
      ></img>
      <div className="relative rounded-full -mt-14 lg:-mt-28 h-24 w-24 lg:h-40 lg:w-40 mx-auto border-4 lg:border-8 border-white z-10">
        <img
          className="object-cover rounded-full w-full h-full"
          src="/profile-avatar.jpeg"
        ></img>
      </div>
      <div className="px-4 text-center">
        <p className="text-3xl font-bold">Manraj Singh</p>
        <p className="text-sm font-medium text-gray-500 pt-1">
          ❤️ 554 supporters
        </p>
        <p className="text-base font-normal pt-1">
          Fueling My Code Passion, One Cup at a Time!
        </p>
      </div>
    </div>
  );
};

export default Hero;
