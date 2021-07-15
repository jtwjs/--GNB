import React from 'react';
import styled from 'styled-components/macro';

import GlobalNav from "components/global_nav";

const Wrapper = styled.header`
	position: relative;
	width: 100%;
	height: 5rem;
	border-bottom: 1px solid ${({theme}) => theme.colors.lightGreyColor};
	background-color: ${({theme}) => theme.colors.whiteColor};
	z-index: 100;
`

const Container = styled.div`
	max-width: 106rem;
	width: 100%;
	height: 5rem;
	margin: 0 auto;
`

export default function Header(props) {
	return (
		<Wrapper>
			<Container>
				<GlobalNav />
			</Container>
		</Wrapper>
	);
};

Header.defaultProps = {
	
};

