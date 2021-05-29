
import React, { Component } from 'react';
import Dashboard from './components/Dashboard';
import Header from './components/layout/Header';
import { BrowserRouter as Router ,Route} from 'react-router-dom';
import AddProject from './components/projects/AddProject';
import 'antd/dist/antd.css'
import './components/layout/header.css'
import { Provider } from 'react-redux';
import store from './store';
import UpdateProject from './components/projects/UpdateProject';

 class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Router>
            <div className='App'>
              <Header />
              {/* <Route exact path='/'  */}
              <Route exact path='/dashboard' component={Dashboard}/>
              <Route exact path='/addProject' component={AddProject}/>
              <Route exact path='/updateProject/:id' component={UpdateProject} />
            </div>
          </Router>
      </Provider>
    )
  }
}

export default App;
