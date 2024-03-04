import SliderPage from './components/Sliderpage/SliderPage'
import PrevNext from './components/Button/PrevNext'
import sliderPostjson from "./json/slider.json";
import './css/slider.css'
import '@fortawesome/fontawesome-free/css/all.css';

function App() {
  
  return (
    <div className="container">
      <div className="slide">
        {sliderPostjson.map((sliderPost) => (
          <SliderPage
            key={sliderPost.id}
            imageUrl={sliderPost.imageUrl}
            title={sliderPost.title}
            content={sliderPost.content}
          />
        ))}
      </div>
      <PrevNext className="button" />
    </div>
  )
}

export default App
