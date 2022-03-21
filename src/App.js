import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Films from './views/Films/Films';
import Header from './components/Header/Header';




function App() {
  return (
    <BrowserRouter>
      <div className='App'> 
        <Header />
        <Switch> 
          <Route exact path="/films">
            <Films />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}


export default App;
