import images from "./data/images";
import choice from "./util/choice";

function App() {
  const image = choice(images);
  return (
    <div>
      <img src={image.src} alt={image.title} />
      <h3>{image.title}</h3>
    </div>
  );
}

export default App;
