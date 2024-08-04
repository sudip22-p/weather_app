import './App.css'
import MyLocationInfo from './components/myLocation/MyLocationInfo'
import SearchLocationInfo from './components/searchLocation/SearchLocationInfo'

function App() {

  return (
    <div className='flex flex-row justify-between content-center  w-[100vw] h-[100vh] overflow-hidden'>
        <MyLocationInfo/>
        <SearchLocationInfo/>
    </div>
  )
}

export default App
