import Navbar from "../components/Navbar";
import Avatar from "../resources/square-portfolio.webp";

function Portfolio() {
  return (
    <div class="container">
      <Navbar />
      <h1>Portfolio</h1>
      <img src={Avatar} alt="Ma face" class="avatar" />
    </div>
  );
}

export default Portfolio;
