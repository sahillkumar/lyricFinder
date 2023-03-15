import Search from "../Search";
import Tracks from "../Tracks";
import "./index.css";

function Home() {
  return (
    <div className="home">
      <Search />
      <Tracks />
    </div>
  );
}

export default Home;
