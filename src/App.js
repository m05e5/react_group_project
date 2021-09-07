import { Switch, Route, HashRouter as Router } from 'react-router-dom';
import Rockets from './components/Rockets';
import Nav from './components/Nav';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';

const App = () => (
  <div>
    <Router basename="/">
      <Nav />
      <Switch>
        <Route exact path="/" component={Rockets} />
        <Route path="/missions" component={Missions} />
        <Route path="/profile" component={MyProfile} />
      </Switch>
    </Router>
  </div>
);

export default App;
