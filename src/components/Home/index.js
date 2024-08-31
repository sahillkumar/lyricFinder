import Search from "../Search";
import Tracks from "../Tracks";
import "./index.css";

function Home() {
  return (
    <main className="home">
      <Search />
      <Tracks />
    </main>
  );
}

export default Home;
