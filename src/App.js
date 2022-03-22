import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Films from './views/Films/Films';
import Header from './components/Header/Header';
import Books from './views/Books/Books';
import Characters from './views/Characters/Characters';



function App() {
  return (
    <BrowserRouter>
      <div className='App'> 
        <Header />
        <Switch> 
          <Route exact path="/films">
            <Films />
          </Route>
          <Route exact path="/books">
            <Books />
          </Route>
          <Route exact path="/characters">
            <Characters />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}


export default App;
