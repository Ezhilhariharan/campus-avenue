import Page from './Page.js';
import './App.css';
import SecondPage from './SecondPage.js';
import ThirdPage from './ThirdPage.js';
import FourthPage from './FourthPage';
import FifthPage from './FifthPage';
import SixthPage from './SixthPage';
import SevenPage from './SevenPage';
import EightPage from './EightPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { validateYupSchema } from 'formik';

function App() {
  return (
    <div className="App">
      
      <Router>
        
        <Switch>
          <Route path='/' exact component={Page} />
          <Route path="/SecondPage/:name" component={SecondPage} />
          <Route path="/ThirdPage/:name" component={ThirdPage} />
          <Route path="/FourthPage/:name" component={FourthPage} />
          <Route path="/FifthPage/:name" component={ FifthPage} />
          <Route path="/SixthPage" component={ SixthPage} />
          <Route path="/SevenPage" component={ SevenPage} />
          <Route path="/EightPage" component={ EightPage} />
          
        </Switch>
      </Router>
  
    </div>
  );
}

export default App;
