import React from 'react';
import ReactDOM from 'react-dom';
// import registerServiceWorker from './registerServiceWorker';
import { unregister } from './registerServiceWorker';

import { HashRouter } from 'react-router-dom';
import './assets/base.css';
import Main from './PortalPages/Main';
import configureStore from './config/configureStore';
import { Provider } from 'react-redux';
import { ProfileProvider } from './contexts/ProfileContext';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
const store = configureStore();
const rootElement = document.getElementById('root');
const queryClient = new QueryClient()

const renderApp = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <ProfileProvider>
      <QueryClientProvider client={queryClient}>
        <HashRouter>
          <Component />
        </HashRouter>
      </QueryClientProvider>
      </ProfileProvider>
    </Provider>,
    rootElement
  );
};

renderApp(Main);

if (module.hot) {
  module.hot.accept('./PortalPages/Main', () => {
    const NextApp = require('./PortalPages/Main').default;
    renderApp(NextApp);
  });
}
unregister();

// registerServiceWorker();
