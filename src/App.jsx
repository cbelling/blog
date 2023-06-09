import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Articles from './pages/Articles';
import Article from './pages/Article';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <div className="App">
        <div className="container mx-auto py-12 flex flex-col min-h-screen">
      <Header />
      <div className="mx-4">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about-me" element={<AboutMe/>} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
      </div>
      <Footer />
      </div>
    </div>
  );
}

export default App;
