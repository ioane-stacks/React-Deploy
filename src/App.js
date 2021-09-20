import photo from './img/facecat.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello, I am Ionae</h1>
      <h2>Me: This is my new React App on Github!</h2>
      <h3>Cat: No, you attempted to upload App fourth time unsuccessfully</h3>
      <img src={photo} alt="no photo" />
    </div>
  );
}

export default App;
