import './App.css';
import { Switch, Route, BrowserRouter as Router, } from 'react-router-dom';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component'
function App() {
  return (
    <Router>
      <Header />
      <Switch  >
        <Route path='/' component={HomePage}></Route>
      </Switch >
    </Router>
  );
}

export default App;
