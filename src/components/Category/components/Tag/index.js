import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import { actionCreators } from '../../store'

const Tag = props => {
	const { path, tag, tagId, setTagId } = props;

	return (
		<div className="category_popover">
			<ul className="tag_list">
				{tag.map(item => (
					<li className="tag" key={item.tagId}>
						<Link
							to={'/' + path + '/' + item.title}
							onClick={() => setTagId(item.tagId)}
						>
							{item.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

const mapState = state => ({
	tag: state.getIn(['category', 'tag']),
	tagId: state.getIn(['category', 'tagId']),
})

const mapDispatch = dispatch => ({
	setTagId(tagId) {
		dispatch(actionCreators.setTagId(tagId))
	}
})

export default connect(mapState, mapDispatch)(Tag);
