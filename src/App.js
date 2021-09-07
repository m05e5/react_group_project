/* eslint-disable linebreak-style */
// import { Switch, Route, HashRouter as Router } from 'react-router-dom';
// import Rockets from './components/Rockets';
// import Nav from './components/Nav';
// import MyProfile from './components/MyProfile';

// const App = () => (
//   <div>
//     <Router basename="/">
//       <Nav />
//       <Switch>
//         <Route path="/missions" component={Missions} />
//         <Route path="/profile" component={MyProfile} />
//         <Route exact path="/" component={Rockets} />
//       </Switch>
//     </Router>
//   </div>
// );
/* eslint-disable */
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './components/Header';
import { Provider } from 'react-redux';
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
