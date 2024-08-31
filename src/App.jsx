import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./global.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Lyrics from "./components/Lyrics";
import { LyricFinderContextProvider } from "./state/context";
import Footer from "./components/Footer";

function App() {
  return (
    <LyricFinderContextProvider>
      <BrowserRouter>
        <div className="main">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/track/lyrics/:id" component={Lyrics} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </LyricFinderContextProvider>
  );
}

export default App;
