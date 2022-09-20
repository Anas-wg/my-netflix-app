import './App.css'
import Nav from './components/Nav';
import Banner from './components/Banner';
import Row from './components/Row';
import requests from './api/requests';
import Footer from './components/Footer';

function App() {
  return (
  <div className='app'>
    <Nav />
    <Banner />

    <Row 
      //props 로 처리
      title= "NETFLIX ORIGINALS"
      id="NO"
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow
    />

    <Row 
      title="Trending Now"
      id="TN"
      fetchUrl={requests.fetchTrending}
    />

    <Row 
      title="Top Rated"
      id="TR"
      fetchUrl={requests.fetchTopRated}
    />
    <Row 
      title="Action Movies"
      id="AM"
      fetchUrl={requests.fetchActionMovies}
    />

    <Footer />
  
  </div>
  );
}

export default App;
