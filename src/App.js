import images from "./data/images";
import choice from "./util/choice";
import ImageContainer from "./ImageContainer"

function App() {
  const image = choice(images);
  return (
    <div>
      <ImageContainer {...image} />
      <h3>{image.title}</h3>
    </div>
  );
}

export default App;
