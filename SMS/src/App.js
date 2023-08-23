
import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './component/LoginPage';
import StudentHomePage from './component/StudentHomePage';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={LoginPage}></Route>
        <Route path="/login" exact component={LoginPage}></Route>
        <Route path="/home" exact component={StudentHomePage}></Route>
      </Switch>
    </div>
  );
}

export default App;
