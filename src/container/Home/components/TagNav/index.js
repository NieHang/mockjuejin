import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../../../../components/Category/store';

const TagNav = props => {
	const { navTag, tagId, setTagId } = props;
	
	// 如果标签的下标大于6，就消失，反之出现
	const [conditionNum, setConditionNum] = useState(6)

	const handleClick = e => {
		setTagId(e.target.getAttribute('data-tagid'));
	};

	const showTag = () => setConditionNum(30)

	return (
		<nav className="tag_nav" onClick={e => handleClick(e)}>
			<Link to='全部'>
				<li
					className={tagId === 'all' ? 'nav_item active' : 'nav_item'}
					data-tagid="all"
				>
					全部
				</li>
			</Link>
			{navTag.map((item, index) => (
				<Link to={item.title} key={item.tagId}>
					<li
						className={tagId === item.tagId ? 'nav_item active' : 'nav_item'}
						key={item.tagId}
						data-tagid={item.tagId}
						style={{display: index > conditionNum ? 'none' : null}}
					>
						{item.title}
					</li>
				</Link>
			))}
			<li className="nav_item" onClick={showTag} style={{display: conditionNum === 30 ? 'none' : 'flex'}}>展开<i className='iconfont iconxiajiantou'></i></li>
		</nav>
	);
};

const mapState = state => ({
	navTag: state.getIn(['category', 'navTag']),
	tagId: state.getIn(['category', 'tagId'])
});

const mapDispatch = dispatch => ({
	setTagId(tagId) {
		dispatch(actionCreators.setTagId(tagId));
	}
});

export default connect(
	mapState,
	mapDispatch
)(TagNav);
