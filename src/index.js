import React from 'react';
import { render } from 'react-dom';
import { Browser, Match, Miss} from 'react-router';
import './css/style.css';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';
import App from './components/App';
import BrowserRouter from 'react-router/BrowserRouter';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={StorePicker}/>
        <Match exactly pattern="/store/:storeId" component={App}/>
        <Miss component={NotFound}/>
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.querySelector('#main'));