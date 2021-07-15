import React from 'react';
import styled from 'styled-components/macro';

import GlobalNav from "components/global_nav";
import GlobalUtilMenu from "components/global_util_menu";
import logo from 'assets/images/logo_wanted.png';

const Wrapper = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 5rem;
	border-bottom: 1px solid ${({theme}) => theme.colors.lightGreyColor};
	background-color: ${({theme}) => theme.colors.whiteColor};
	z-index: 100;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
	max-width: 106rem;
	width: 100%;
	height: 5rem;
	margin: 0 auto;
`;
const StyledLogo = styled.div`
`;
const LogoLink = styled.a`
	display: block;
`;

export default function Header(props) {
	return (
		<Wrapper>
			<Container>
				<StyledLogo>
					<LogoLink href="/">
						<h1 className="a11y">
							wanted
						</h1>
						<img src={logo} alt="logo"/>
					</LogoLink>
				</StyledLogo>
				<GlobalNav />
				<GlobalUtilMenu />
			</Container>
		</Wrapper>
	);
};

Header.defaultProps = {
	
};

