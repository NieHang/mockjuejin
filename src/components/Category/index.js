import React, { useState, useEffect } from 'react';
import { actionCreators } from './store'
import { connect } from 'react-redux'

import List from './components/List';

import './css/style.css';

const Category = props => {
	const { tab, getTabData } = props
  
	const [tabId, setTabId] = useState(null)

	useEffect(() => {
		getTabData()
	}, []);

	return (
		<nav className="container_down">
			<List tab={tab} tabId={tabId} onChange={id => setTabId(id)}/>
		</nav>
	);
};

const mapState = state => ({
	tab: state.getIn(['category', 'tab'])
})

const mapDispatch = dispatch => ({
	getTabData() {
		dispatch(actionCreators.getTabData())
	}
})

export default connect(mapState, mapDispatch)(Category);
