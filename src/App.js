import './App.css'
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Outlet, Route, Routes } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';

const LayOut = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  )
}


function App() {
  return (
  <div className='app'>
      <Routes>
        <Route path='/' element={<LayOut />}>
          <Route index element={<MainPage />} />
          <Route path=':movieId' element={<DetailPage />} />
          <Route path='serarch' element={<SearchPage />}/>
        </Route>
      </Routes>
  
  </div>
  );
}

export default App;
