import './App.css';
import { Switch, Route, BrowserRouter as Router, } from 'react-router-dom';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
function App() {
  return (
    <Router>
      <Header />
      <Switch  >
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/shop' component={ShopPage}></Route>
      </Switch >
    </Router>
  );
}

export default App;
