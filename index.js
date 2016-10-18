import React from 'react'
import { createStore, compose } from 'redux'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import App   from './components/App'
import DevTools from './containers/DevTools'
import reducer from './reducers/index'


const enhancer = compose(
  DevTools.instrument()
);

const store = createStore(reducer);
let rootElement = document.getElementById('root');

const render = () => {
	ReactDom.render(
		<Provider store={store}>
				<App />
		</Provider>
		,
		rootElement
	)
}
render();
