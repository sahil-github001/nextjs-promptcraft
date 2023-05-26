import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit, desc }) => {
  return (
    <section className="w=full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">{desc}</p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-2-2xl flex flex-col gap-7  p-5 rounded-lg mb-5 bg-zinc-600 "
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-white">
            Your AI Prompt
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write Your Prompt here..."
            required
            className="form_textarea"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-white">
            Tag {` `}
            <span className="font-normal text-gray-400">
              (#product, #webdevelopement, #idea)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#tag"
            required
            className="form_input"
          />
        </label>
        <div className="flex-end mx-3 mb-5  gap-4">
          <Link href="/" className="text-gray-100 text-sm">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white "
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
