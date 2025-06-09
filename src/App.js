import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>My React Portfolio</h1>
      <ul>
        <li>
          <Link to="/cv">CV</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
