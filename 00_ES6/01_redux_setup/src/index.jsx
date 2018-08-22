import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { HashRouter, Switch, Route } from 'react-router-dom';
import {SessionProvider} from './common';
import { store } from './store';
import {LobbyContainer, ChatContainer} from './pages';

ReactDOM.render(
 <Provider store={store}>
    <SessionProvider>
      <HashRouter>
        <Switch>
          <Route exact={true} path="/" component={LobbyContainer} />
          <Route path="/chat" component={ChatContainer} />
        </Switch>
      </HashRouter>
    </SessionProvider>
 </Provider>  
  ,
  document.getElementById('root')
);