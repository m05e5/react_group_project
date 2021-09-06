/* eslint-disable */
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './components/Header';
import MyProfile from './components/MyProfile';
import Rockets from './components/Rockets';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/myProfile">
            <MyProfile />
          </Route>
          <Route path="/">
            <Rockets />
          </Route>
        </Switch>
      </Router>
      <p>hello world</p>
    </div>
  );
}

export default App;
