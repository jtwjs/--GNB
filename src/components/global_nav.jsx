import React from 'react';
import styled from 'styled-components/macro';

import GlobalNavItem from 'components/global_nav_item';
import GlobalUtilMenu from "components/global_util_menu";
import logo from 'assets/images/logo_wanted.png';
import headerData from 'data/header.json';

const Wrapper = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 100%;
`
const StyledLogo = styled.div`
`
const LogoLink = styled.a`
	display: block;
`
const MenuList = styled.ul`
	display: flex;
	height: 100%;
`

export default function GlobalNav(props) {
	return (
		<Wrapper>
			<StyledLogo>
				<LogoLink href="/">
					<span className="hidden">홈으로 이동</span>
					<img src={logo} alt="logo"/>
				</LogoLink>
			</StyledLogo>
			<MenuList>
				{
					headerData.globalNav.map(item => (
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
			<GlobalUtilMenu />
		</Wrapper>
	);
};

GlobalNav.defaultProps = {
	
};

