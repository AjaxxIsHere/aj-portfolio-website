import './Styles/App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';
import CVDownload from './Components/Pages/CVDownload';
import Portfolio from './Components/Pages/Portfolio'; 
import Contact from './Components/Pages/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path = "/">
              <Home />
            </Route>
            <Route exact path = "/Portfolio">
              <Portfolio />
            </Route>
            <Route exact path = "/Contact">
              <Contact />
            </Route>
            <Route exact path = "/DownloadCV">
              <CVDownload />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
