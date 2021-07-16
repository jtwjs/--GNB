import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components/macro';

import { theme } from "styles/theme";
import Header from 'components/layout/header';

const Wrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100vh;
	
  @media screen and ${({theme}) => theme.device.mobile} {
  padding-top: 5.7rem;
  }
`
const StyledMain = styled.main`
	width: 100%;
	height: 100%;
  padding-top: 5rem;
	background-color: ${({theme}) => theme.colors.whiteColor};
`

export default function Layout({ children }) {

	return (
		<ThemeProvider theme={ theme }>
			<Wrapper>
				<Header />
				{children}
			</Wrapper>
		</ThemeProvider>
	);
};

Layout.Main = function LayoutMain({ children })  {
	return (
		<StyledMain id="main">
			{children}
		</StyledMain>
	)
}