const Description = () => {
  return (
    <div
      style={{
        borderWidth: "1px",
      }}
      className="rounded-md border-gray-200 pb-4"
    >
      <img
        className="h-[420px] w-full object-cover rounded-t-md"
        src="/cover-image-3.png"
      ></img>
      <div className="mt-5 px-4">
        <h1 className="text-3xl font-semibold mb-2">Support My Work</h1>
        <p className="text-base mb-4">
          Thank you for visiting my "Buy Me a Coffee" page! If you've enjoyed
          the content, projects, or assistance I've provided, consider
          supporting my work with a small contribution. Every coffee you buy me
          helps keep the inspiration flowing and fuels more creative endeavors.
        </p>

        <p className="text-base mb-4">
          Your support is a direct investment in the knowledge, tools, and
          resources that allow me to continue offering valuable content and
          assistance. Whether you're an avid reader, a fellow creator, or
          someone who just appreciates what I do, your contribution means the
          world to me.
        </p>

        <h2 className="text-xl font-semibold mb-2">Why Buy Me a Coffee?</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            It helps me dedicate more time to creating high-quality content.
          </li>
          <li>It ensures that I can maintain and upgrade the tools I use.</li>
          <li>It shows your appreciation and motivates me to keep going.</li>
        </ul>

        <p className="text-base mb-4">
          Your support is entirely optional, and I genuinely appreciate every
          coffee you choose to share. Thank you for being a part of my creative
          journey!
        </p>

        <h2 className="text-xl font-semibold mb-2">How It Works</h2>
        <ol className="list-decimal list-inside mb-4">
          <li>Click the "Buy Me a Coffee" button.</li>
          <li>Choose the number of coffees you'd like to buy.</li>
          <li>Follow the simple steps to make your contribution.</li>
        </ol>

        <p className="text-base mb-4">
          Your support is greatly valued and goes a long way in fueling future
          projects and content. Thank you for being a part of this creative
          community.
        </p>

        <h2 className="text-xl font-semibold mb-2">What's in it for You?</h2>
        <p className="text-base mb-4">
          While your support is an act of kindness, I also want to show my
          appreciation. For every coffee you buy, you'll receive a warm, virtual
          "Thank You" from me. Plus, you'll be helping me create more content,
          tutorials, and resources for you and others to enjoy.
        </p>

        <p className="text-base">
          Thank you for your support and encouragement. It means a lot!
        </p>
      </div>
    </div>
  );
};

export default Description;
