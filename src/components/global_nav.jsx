import React, {forwardRef} from 'react';
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


const GlobalNav = forwardRef(({lnbRef, isShowLnb, handleHideLnb ,handleGnbHover}, ref) => {


	return (
		<Wrapper>
			<h2 className="a11y">사이트 네비게이션</h2>
			<MenuList
				onMouseOver={handleGnbHover}
				onFocus={handleGnbHover}
				ref={ref}
			>
				{
					headerData.GNB.map(item => (
						item.id === 'explore'
						? <GlobalNavItem
								key={item.id}
								id={item.id}
								link={item.link}
								title={item.title}
								isBeta={item.isBeta}
								aria-controls="lnb"
								aria-expanded={isShowLnb}
							/>
						: <GlobalNavItem
								key={item.id}
								id={item.id}
								link={item.link}
								title={item.title}
								isBeta={item.isBeta}
							/>
					))
				}
			</MenuList>
			<LocalNav
				show={isShowLnb}
				handleMouseLeave={handleHideLnb}
				ref={lnbRef}
			/>
		</Wrapper>
	);
});

export default GlobalNav;