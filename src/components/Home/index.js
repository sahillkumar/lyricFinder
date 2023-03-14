import Search from "../Search";
import Tracks from "../Tracks";

function Home() {
  return (
    <div style={{ position: "relative", border: "1px solid red", top: 50 }}>
      <Search />
      <Tracks />
    </div>
  );
}

export default Home;
