import '@babel/polyfill'
import * as React from 'react'
import { render } from 'react-dom'
import App from './components/App'

/* webpackChunkName: 'app' */ 
import('./components/App')
 .then(({ default: App }) => 
 render(<App />, 
 document.getElementById('root'))
)
