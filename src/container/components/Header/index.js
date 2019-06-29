import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './css/style.css';

const Header = () => {
	// 搜索框样式显隐
	const [focus, setFocus] = useState(false);

	// 发布沸点，分享链接的显隐
	const [isShow, setIsShow] = useState(false);

	// 菜单栏的显隐
	const [showMenu, setShowMenu] = useState(false);

	const handleFocus = () => setFocus(true);

	const handleBlur = () => setFocus(false);

	const handleShowMenu = () => setShowMenu(!showMenu);

	// 发布沸点，分享链接的显隐
	const showMoreList = () => setIsShow(!isShow);

	// 点击空白处，隐藏列表
	const hideList = e => {
		let targetId = e.target ? e.target.id : e.srcElement.id;
		if (targetId !== 'more') {
			setIsShow(false);
		}
		if (targetId !== 'avatar') {
			setShowMenu(false);
		}
	};

	useEffect(() =>
		document.addEventListener(
			'click',
			hideList,
			() =>
				document.removeEventListener('click', hideList)
		)
	);

	return (
		<header className="header">
			<div className="header_container">
				<div className="container_up">
					<Link to="/" className="up_logo">
						<img
							src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg"
							alt="juejin"
						/>
					</Link>
					<nav className="up_nav">
						<ul className="nav_list">
							<li className="main_nav_list">
								<ul className="nav_list_link">
									<li className="link_item">
										<Link to="/">首页</Link>
									</li>
									<li className="link_item">
										<Link to="/">沸点</Link>
									</li>
									<li className="link_item">
										<Link to="/">话题</Link>
									</li>
									<li className="link_item">
										<Link to="/">小册</Link>
									</li>
									<li className="link_item">
										<Link to="/">活动</Link>
									</li>
									<li className="link_item">
										<Link to="/">
											<img
												src="https://b-gold-cdn.xitu.io/v3/static/img/flutter-xiaoce.f59b99e.png"
												alt="flutter"
											/>
											<span className="flutter_xiaoce_text_container">
												<span className="flutter_xiaoce_text">Flutter</span>
												<span className="flutter_xiaoce_text">视频课</span>
											</span>
										</Link>
									</li>
								</ul>
							</li>
							<li className="nav_item nav_search">
								<form
									role="search"
									className={
										focus ? 'search_form search_form_active' : 'search_form'
									}
								>
									<input
										onFocus={handleFocus}
										onBlur={handleBlur}
										type="search"
										maxLength="32"
										placeholder="搜索更新啦"
									/>
									<i className="iconfont iconicon_search" />
								</form>
							</li>
							<li className="nav_item add">
								<div className="add_group">
									<div className="add_btn">写文章</div>
									<div className="more" onClick={showMoreList}>
										<i className="iconfont iconxiajiantou" id="more" />
									</div>
									<ul
										className={
											isShow ? 'more_list more_list_active' : 'more_list'
										}
									>
										<li>发布沸点</li>
										<li>分享链接</li>
									</ul>
								</div>
							</li>
							<li className="nav_item notification">
								<Link to="/">
									<i className="iconfont iconlingdang" />
								</Link>
							</li>
							<li className="nav_item menu">
								<img
									src="https://user-gold-cdn.xitu.io/2019/3/20/16998c98ed61dcee?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1"
									alt="avatar"
									onClick={handleShowMenu}
									id='avatar'
								/>
								<ul
									className={showMenu ? 'nav_menu nav_menu_active' : 'nav_menu'}
								>
									<div className="nav_menu_item_group">
										<li className="nav_menu_item">
											<Link to="/">
												<i className="iconfont iconicon_report_write" />
												<span>写文章</span>
											</Link>
										</li>
										<li className="nav_menu_item">
											<Link to="/">
												<i className="iconfont iconcaogao" />
												<span>草稿</span>
											</Link>
										</li>
									</div>
									<div className="nav_menu_item_group">
										<li className="nav_menu_item">
											<Link to="/">
												<i className="iconfont iconwodedangxuan" />
												<span>我的主页</span>
											</Link>
										</li>
										<li className="nav_menu_item">
											<Link to="/">
												<i className="iconfont iconzan-" />
												<span>我赞过的</span>
											</Link>
										</li>
										<li className="nav_menu_item">
											<Link to="/">
												<i className="iconfont iconstar-fill" />
												<span>我的收藏集</span>
											</Link>
										</li>
										<li className="nav_menu_item">
											<Link to="/">
												<i className="iconfont iconshopcar" />
												<span>已购</span>
											</Link>
										</li>
										<li className="nav_menu_item">
											<Link to="/">
												<i className="iconfont iconbookmark" />
												<span>标签管理</span>
											</Link>
										</li>
									</div>
									<div className="nav_menu_item_group">
										<li className="nav_menu_item">
											<Link to="/">
												<i className="iconfont iconoutline" />
												<span>设置</span>
											</Link>
										</li>
										<li className="nav_menu_item" about="about">
											<Link to="/">
												<i className="iconfont iconForm-Info" />
												<span>关于</span>
												<i className="iconfont iconyoujiantou" />
											</Link>
											<ul className="nav_menu nav_menu_about">
												<div className="nav_menu_item_group">
													<li className="nav_menu_item">
														<Link to="/">
															<span>下载应用</span>
														</Link>
													</li>
													<li className="nav_menu_item">
														<Link to="/">
															<span>关于</span>
														</Link>
													</li>
													<li className="nav_menu_item">
														<Link to="/">
															<span>加入我们</span>
														</Link>
													</li>
													<li className="nav_menu_item">
														<Link to="/">
															<span>翻译计划</span>
														</Link>
													</li>
													<li className="nav_menu_item">
														<Link to="/">
															<span>合作伙伴</span>
														</Link>
													</li>
												</div>
											</ul>
										</li>
									</div>
									<div className="nav_menu_item_group">
										<li className="nav_menu_item">
											<Link to="/">
												<i className="iconfont iconic_logout" />
												<span>登出</span>
											</Link>
										</li>
									</div>
								</ul>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
