import React from 'react';
import styled from 'styled-components/macro';

const Wrapper = styled.li`
	height: 100%;
  &[data-gnb-kind = 'home'] {
    display: none;
  }

  @media screen and ${({theme}) => theme.device.mobile} {
    &[data-gnb-kind = 'home'] {
	    display: block;
	    
	    & > a::before {
		    content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: .3rem;
        background-color: ${({theme}) => theme.colors.blueColor};
	    }
    }
	  
	  &[data-gnb-kind = 'salary'],
	  &[data-gnb-kind = 'resume'],
    &[data-gnb-kind = 'matchup'],
    &[data-gnb-kind = 'freelancer'],
    &[data-gnb-kind = 'aiScore'] {
		  display: none;
	  }
  }
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
		height: .3rem;
		background-color: ${({theme}) => theme.colors.greyColorC};
	}

	@media screen and ${({theme}) => theme.device.laptop} {
		padding: 0 1.2rem;
	}
  @media screen and ${({theme}) => theme.device.tablet} {
    padding: 0 .4rem;
    font-size: ${({theme}) => theme.fontSizes.small};
	  
    &::after {
      right: -1.6rem;
    }
  }
  @media screen and ${({theme}) => theme.device.mobile} {
    padding: 0 1.6rem;
    font-size: ${({theme}) => theme.fontSizes.base};
	  
    &:hover::before {
      content: unset;
    }
  }
`;

export default function GlobalNavItem({id, link, title, isBeta, ...restProps}) {
	return (
		<Wrapper data-gnb-kind={id}>
			<StyledLink
				href={link}
				isBeta={isBeta}
				{...restProps}
			>
				{title}
			</StyledLink>
		</Wrapper>
	);
};
