import './App.css';


function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    // You can add your API call or any other logic to handle the form submission here
  };

  return (
    <div className="container mx-auto px-2 py-12 flex flex-col min-h-screen">
      <header className="flex items-center justify-between mb-10">
        <p className="text-xl font-bold text-center">Austin Bellinger</p>
        <nav className="text-lg">
          <a href="/" className="mx-3">Home</a>
          <a href="/" className="mx-3">About Me</a>
          <a href="/articles" className="mx-3">Articles</a>
          <a href="/articles" className="mx-3">Books</a>
        </nav>
        <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
          Subscribe
        </button>
      </header>
      {/* Rest of the content */}
      <main className="flex-grow">
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
        <div className="mt-5">
          <h1 className="text-2xl font-bold mb-2">Article Title</h1>
          <p>Article Description</p>
        </div>
        <div className="mt-10">
          <h1 className="text-2xl font-bold mb-2">Article Title</h1>
          <p>Article Description</p>
        </div>
        <div className="mt-10">
          <h1 className="text-2xl font-bold mb-2">Article Title</h1>
          <p>Article Description</p>
        </div>
      </div>
      <hr className="section-divider mx-auto my-16 w-full max-w-4xl" />
      <div className="mt-16">
        <p className="text-2xl font-semibold text-center mb-10">Books</p>
        <div className="mt-5">
          <h1 className="text-2xl font-bold mb-2">Article Title</h1>
          <p>Article Description</p>
        </div>
        <div className="mt-10">
          <h1 className="text-2xl font-bold mb-2">Article Title</h1>
          <p>Article Description</p>
        </div>
        <div className="mt-10">
          <h1 className="text-2xl font-bold mb-2">Article Title</h1>
          <p>Article Description</p>
        </div>
      </div>
      </main>
      <footer className="mt-10 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Austin Bellinger. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
