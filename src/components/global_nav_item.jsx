import React from 'react';
import styled from 'styled-components/macro';

const Wrapper = styled.li`
	height: 100%;
`
const StyledLink = styled.a.attrs(({isBeta}) => ({
	isBeta: isBeta ? "'Beta'" : null
}))`
	position: relative;
	display: flex;
	align-items: center;
	height: 100%;
	padding: 0 1.5rem;
	font-size: ${({theme}) => theme.fontSizes.base};
	font-weight: 600;
	
	&::after {
		content: ${({isBeta}) => isBeta};
		position: absolute;
		top: 1.4rem;
		right: -.8rem;
		font-size: ${({theme}) => theme.fontSizes.xs};
		font-weight: 300;
		color: ${({theme}) => theme.colors.blueColor};
	}
	
	&:hover::before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 3px;
		background-color: ${({theme}) => theme.colors.greyColorC};
	}
`


export default function GlobalNavItem({link, title, category, isBeta}) {
	return (
		<Wrapper>
			<StyledLink href={link} isBeta={isBeta}>
				{title}
			</StyledLink>
		</Wrapper>
	);
};

GlobalNavItem.defaultProps = {
	
};

