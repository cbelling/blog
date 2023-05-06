import articles from '../content/articles.json';
import { Link } from 'react-router-dom';

function Home() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    // You can add your API call or any other logic to handle the form submission here
  };

  return (
    <div className="container mx-auto py-12 flex flex-col min-h-screen">
      <main className="flex-grow">
      <div className="bg-green-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-10">Hi! Welcome to my blog</h1>
      <div className="text-center">
        <p className="mb-6">Interested in getting a newsletter? Fill out the form below.</p>
        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
          <input
            type="email"
            id="email"
            name="email"
            className="border-2 border-gray-300 rounded w-full py-2 px-3 mb-6"
            placeholder="Enter your email"
            required
          />
          <button
            type="submit"
            className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
          >
            Subscribe
          </button>
        </form>
      </div>
      </div>
      <hr className="section-divider mx-auto my-16 w-full max-w-4xl" />
      <div className="mt-16">
        <p className="text-2xl font-semibold text-center mb-10">About Me</p>
        <div className="mt-5">
          <p>Article Description</p>
        </div>
      </div>
      <hr className="section-divider mx-auto my-16 w-full max-w-4xl" />
      <div className="mt-16">
        <p className="text-2xl font-semibold text-center mb-10">Read my articles below.</p>
        {articles.map((article) => (
        <div key={article.id}>
          <Link to={`/article/${article.id}`}>{article.title}</Link>
          <p>{article.description}</p>
        </div>
      ))}
      </div>
      <hr className="section-divider mx-auto my-16 w-full max-w-4xl" />
      <div className="mt-16">
        <p className="text-2xl font-semibold text-center mb-10">Books</p>
        {articles.map((article) => (
        <div key={article.id}>
          <Link to={`/article/${article.id}`}>{article.title}</Link>
          <p>{article.description}</p>
        </div>
      ))}
      </div>
      </main>
    </div>
  );
}

export default Home;
