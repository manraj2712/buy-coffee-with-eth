const Profile = () => {
  return (
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
        <div className="rounded-md border-2 border-gray-100 pb-4 md:w-2/3">
          <img
            className="h-80 w-full object-cover rounded-t-md"
            src="https://cdn.buymeacoffee.com/uploads/project_updates/2020/07/1f26344fe8cab6ee703def772f531bf7.jpg@1200w_0e.webp"
          ></img>
          <p className="mt-5 px-4">
            Hallo, Servus, and welcome to this page! 👋 My name is Felicia
            (Feli) and I'm a girl from Germany living in the US - in Cincinnati,
            Ohio to be precise. I've decided to create this page for people who
            would like to support my channel but are hesitant about becoming a
            patron on Patreon. So if you want, you can buy me a "coffee" on here
            - which in my case really means beer or Chai Latte haha because I
            don't actually drink coffee. :) Thank you so much! I appreciate each
            and every one who supports me and my channel.
          </p>
        </div>
        <div className="p-6 rounded-md border-2 border-gray-100 md:w-1/3 h-min pb-10">
          <p className="text-2xl font-bold">Buy Manraj Singh a Coffee ☕</p>
          <input
            style={{
              borderWidth: "1px",
            }}
            className="bg-gray-100 appearance-none border-gray-300 rounded w-full py-3 px-4 text-gray-600 leading-tight focus:outline-none focus:bg-white mt-6"
            id="name"
            type="text"
            value=""
            placeholder="John Doe"
          />
          <textarea
            style={{
              borderWidth: "1px",
            }}
            className="bg-gray-100 appearance-none border-gray-300 rounded w-full py-3 px-4 text-gray-600 leading-tight focus:outline-none focus:bg-white mt-6"
            id="inline-full-name"
            value=""
            placeholder="Say something nice..."
          />
          <button className="mt-6 w-full bg-orange-500 hover:bg-orange-700 text-white font-bold py-4 px-4 rounded-full">
            Support 0.0001 ETH
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
