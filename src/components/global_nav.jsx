import React from 'react';
import styled from 'styled-components/macro';

import GlobalNavItem from 'components/global_nav_item';
import LocalNav from "components/local_nav";

import headerData from 'data/header.json';

const Wrapper = styled.nav`
	height: 100%;
`
const MenuList = styled.ul`
	display: flex;
	height: 100%;
`


export default function GlobalNav(props) {
	return (
		<Wrapper>
			<h2 className="a11y">사이트 네비게이션</h2>
			<MenuList>
				{
					headerData.GNB.map(item => (
						<GlobalNavItem
							key={item.title}
							link={item.link}
							title={item.title}
							category={item?.category}
							isBeta={item.isBeta}
						/>
					))
				}
			</MenuList>
			<LocalNav />
		</Wrapper>
	);
};

GlobalNav.defaultProps = {
	
};

