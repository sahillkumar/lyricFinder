import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Index from './components/layouts/Index'
import { ContextProvider } from './context';
import Lyrics from './components/tracks/Lyrics';

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Navbar/>
        <div className="container">
        <Switch>
          <Route exact path="/" component={Index}/>
          <Route exact path="/track/lyrics/:id" component={Lyrics}/>
        </Switch>
        </div>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
