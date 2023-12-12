import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "../Home"
import CityWeather from "../CityWeather"
import CityDataLoading from "../CityWeather/CityDataLoading"


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} >
            <Route path='/city/:cityName' element={<CityWeather />} />
            <Route path="*" element={<CityDataLoading />} />
          </Route>
          <Route path="*" element={<CityDataLoading />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
