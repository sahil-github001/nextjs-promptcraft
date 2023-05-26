import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Explore & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center ">Creative Prompts</span>
      </h1>
      <p className="desc text-center">
        PromptCraft is a user-friendly web application that allows you to
        discover, create, and share creative prompts.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
