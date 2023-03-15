import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./app.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Lyrics from "./components/Lyrics";
import { LyricFinderContextProvider } from "./state/context";
import Footer from "./components/Footer";

function App() {
  return (
    <LyricFinderContextProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/track/lyrics/:id" component={Lyrics} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </LyricFinderContextProvider>
  );
}

export default App;
