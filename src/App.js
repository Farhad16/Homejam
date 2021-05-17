import './App.scss';
import HeaderContainer from './components/HeaderContainer/HeaderContainer';
import Reviews from './components/Reviews/Reviews';
import UpcomingShows from './components/UpcomingShows/UpcomingShows';

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <UpcomingShows />
      <Reviews />
    </div>
  );
}

export default App;
