/* eslint-disable */
import 'typeface-roboto'
import React from 'react'
import { render } from 'react-dom'

import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'

import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import theme from './aliveTheme'
import store, { history } from './app/store'
import App from './app'
import registerServiceWorker from './registerServiceWorker'

render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>,
  document.querySelector('#root')
)

registerServiceWorker()
