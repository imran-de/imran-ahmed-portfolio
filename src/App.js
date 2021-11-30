import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NoFound from './pages/404/NoFound';
import Blogs from './pages/Blogs/Blogs';
import Details from './pages/Details/Details';
import Home from './pages/Home/Home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/details/:id' element={<Details />} />
          <Route path='/blogs' element={<Blogs />} />

          <Route
            path="*"
            element={<NoFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
