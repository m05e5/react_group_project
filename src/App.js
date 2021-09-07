/* eslint-disable */
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './components/Header';
import { Provider } from 'react-redux';
import MyProfile from './components/MyProfile';
import Rockets from './components/Rockets';
import store from './redux/configureStore';

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
