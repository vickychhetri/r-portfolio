//
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/home';
import Blog from './pages/blog';
import About from './pages/about';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Portfolio from './pages/portfolio';
import SinglePage from './pages/singlepage';
import Contact from './pages/contact';
import Register from './pages/register';



function App() {
  return (
    <div className="App">
       <Router>
       <Routes>
       <Route exact path="/" element={<Home/>}/>
       <Route exact path="/about" element={<About/>}/>
       <Route exact path="/blog" element={<Blog/>}/>
       <Route exact path="/blog/:userId" element={<SinglePage/>}/>
       <Route exact path="/portfolio" element={<Portfolio/>}/>
       <Route exact path="/contact" element={<Contact/>}/>
       <Route exact path="/register" element={<Register/>}/>
        </Routes>
       
       </Router>
    </div>
  );
}

export default App;
