/* eslint-disable */
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header';
import MyProfile from './components/MyProfile';
import Missions from './components/Missions';
import Rockets from './components/Rockets';
import store from './redux/configureStore';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/myProfile">
            <Provider store={store}> 
              <MyProfile />
            </Provider>
          </Route>
          <Route path="/missions">
            <Missions />
          </Route>
          <Route path="/">
            <Provider store={store}> 
              <Rockets />
            </Provider>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
