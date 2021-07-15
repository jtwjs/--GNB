import React from 'react';
import styled, { ThemeProvider } from 'styled-components/macro';

import { theme } from "styles/theme";
import Header from 'components/layout/header';

const Wrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100vh;
	padding-top: 5rem;
`

const StyledMain = styled.main`
	width: 100%;
	height: 100%;
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

Layout.Main = ({ children }) => {
	return (
		<StyledMain>
			{children}
		</StyledMain>
	)
}