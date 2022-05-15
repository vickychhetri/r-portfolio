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



function App() {
  return (
    <div className="App">
       <Router>
       <Routes>
       <Route exact path="/" element={<Home/>}/>
       <Route exact path="/about" element={<About/>}/>
       <Route exact path="/blog" element={<Blog/>}/>
       <Route exact path="/portfolio" element={<Portfolio/>}/>
        </Routes>
       
       </Router>
    </div>
  );
}

export default App;
