const Hero = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div>
      <img
        className="object-cover px-3 h-[calc(100vw/5.8)] w-full py-2 z-0"
        src={imageUrl}
      ></img>
    </div>
  );
};

export default Hero;
