import React from 'react';
import styled from 'styled-components/macro';

const Wrapper = styled.li`
	display: flex;
	justify-content: center;
	align-items: center;
	
	&:last-child {
		position: relative;
		margin-left: 4rem;
		
		&::before {
			content: '';
			position: absolute;
			left: -20px;
			width: 1px;
			height: 1rem;
			background-color: ${({theme}) => theme.colors.lightGreyColor};
		}
	}
`
const StyledButton = styled.button`
	display: flex;
  justify-content: center;
	width: 3.8rem;
	cursor: pointer;
`
const StyledLink = styled.a`
	display: flex;
  justify-content: center;
	align-items: center;
`

export default function UtilMenuItem({ children, link, ...restProps}) {
	return (
		<Wrapper>
			{
				link
				?	<StyledLink
						href={link}
						{...restProps}
					>
						{children}
					</StyledLink>
				: <StyledButton {...restProps}>
						{children}
					</StyledButton>
			}
		</Wrapper>
	);
};

UtilMenuItem.defaultProps = {
	link: false
};

