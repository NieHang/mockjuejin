import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import { actionCreators } from '../../store'

import Tag from '../Tag';

const List = props => {
	const { tab, tabId, onChange, getTagData } = props;

	const handleMouseOver = (tab, tabId) => {
		onChange(tabId);
		// 获取当前tab的tag
		if (tab != null) {
			getTagData(tab);
		}
	};

	return (
		<ul className="nav_list">
			{tab.map(item => (
				<li className="nav_item" key={item.id}>
					<div className="category-popover-box">
						<Link
							to={item.title}
							className={tabId === item.id ? 'tab_active' : ''}
							onClick={() => onChange(item.id)}
							onMouseOver={() => handleMouseOver(item.weight, item.id)}
						>
							{item.name}
						</Link>
						{tabId === item.id && item.weight ? (
							<Tag path={item.title}/>
						) : null}
					</div>
				</li>
			))}
			<li className="nav_item right">
				<Link to='/subscribe/subscribed'>标签管理</Link>
			</li>
		</ul>
	);
};

const mapState = state => ({
	tag: state.getIn(['category', 'tag']),
	tagId: state.getIn(['category', 'tagId']),
})

const mapDispatch = dispatch => ({
	getTagData(tab) {
		dispatch(actionCreators.getTagData(tab))
	},
	setTagId(tagId) {
		dispatch(actionCreators.setTagId(tagId))
	}
})

export default connect(mapState, mapDispatch)(List);
