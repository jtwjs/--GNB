import React, {useRef, useCallback, useEffect}  from 'react';
import styled from 'styled-components/macro';

import GlobalNav from "components/global_nav";
import GlobalUtilMenu from "components/global_util_menu";
import logo from 'assets/images/logo_wanted.png';
import useShowLnb from "../../hooks/useShowLnb";

const Wrapper = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 5rem;
	border-bottom: 1px solid ${({theme}) => theme.colors.lightGreyColor};
	background-color: ${({theme}) => theme.colors.whiteColor};
	z-index: 100;

  @media screen and ${({theme}) => theme.device.mobile} {
    height: 5.7rem;
  }
`;
const SkipToMain = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 0;
	margin-bottom: -1px; 
	font-size: ${({theme}) => theme.fontSizes.base};
  line-height: 3.4;
  overflow: hidden;
	
	&:focus {
		height: auto;
		margin-bottom: 0;
	}
	
  @media screen and ${({theme}) => theme.device.tablet} {
    &:focus {
	    height: unset;
    }
  }
`
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
	max-width: 106rem;
	width: 100%;
	height: 5rem;
	margin: 0 auto;
	
  @media screen and ${({theme}) => theme.device.laptop} {
    width: 90%;
  }
  @media screen and ${({theme}) => theme.device.mobile} {
    width: 100%;
	  height: 5.7rem;
  }
`;
const StyledLogo = styled.div`
  @media screen and ${({theme}) => theme.device.mobile} {
    display: none;
  }
`;
const LogoLink = styled.a`
	display: block;
`;



export default function Header() {
	const headerRef = useRef(null);
	const gnbRef = useRef(null);
	const lnbRef = useRef(null);
	const utilRef = useRef(null);

	const {isShowLnb, handleShowLnb, handleHideLnb, handleGnbHover} = useShowLnb();

	const handleKeyTrap = useCallback(e => {
		if (!lnbRef.current && !gnbRef.current && !utilRef.current) {
			return;
		}

		const gnbFocusableNodeList = gnbRef.current.querySelectorAll("[href]");
		const lnbFocusableNodeList = lnbRef.current.querySelectorAll("[href]");
		const utilFocusableNodeList = utilRef.current.querySelectorAll('[href], button');

		const shiftKey = e.shiftKey;
		const eventTarget = e.target;

		const gnbFirstFocusableNode = gnbFocusableNodeList[1];
		const gnbSecondFocusableNode = gnbFocusableNodeList[2];
		const gnbLastFocusableNode = gnbFocusableNodeList[gnbFocusableNodeList.length - 1];
		const lnbFirstFocusableNode = lnbFocusableNodeList[0];
		const lnbLastFocusableNode = lnbFocusableNodeList[lnbFocusableNodeList.length - 1];
		const utilFirstFocusableNode = utilFocusableNodeList[0];

		const isGnbFirstFocusableNode = Object.is(eventTarget, gnbFirstFocusableNode);
		const isLnbFirstFocusableNode = Object.is(eventTarget, lnbFirstFocusableNode);
		const isLnbLastFocusableNode = Object.is(eventTarget, lnbLastFocusableNode);
		const isGnbLastFocusableNode = Object.is(eventTarget, gnbLastFocusableNode);
		const isGnbSecondFocusableNode = Object.is(eventTarget, gnbSecondFocusableNode);

		if (!shiftKey && isGnbFirstFocusableNode) {
			e.preventDefault();
			handleShowLnb();
			lnbFirstFocusableNode.focus();

		}

		if (shiftKey && isLnbFirstFocusableNode) {
			console.log(gnbFirstFocusableNode);
			e.preventDefault();
			gnbFirstFocusableNode.focus();
		}

		if (!shiftKey && isLnbLastFocusableNode) {
			e.preventDefault();
			gnbSecondFocusableNode.focus();
		}

		if (!shiftKey && isGnbLastFocusableNode) {
			e.preventDefault();
			utilFirstFocusableNode.focus();
		}

		if (shiftKey && isGnbSecondFocusableNode) {
			e.preventDefault();
			handleShowLnb();
			lnbLastFocusableNode.focus();
		}

	},[]);

	useEffect(() => {

		const keyListenerMap = new Map([
			[ 9, handleKeyTrap ],
		]);

		function handleKeyListener(e) {
			const listener = keyListenerMap.get(e.keyCode);
			typeof listener === "function" && listener(e);
		}
		headerRef.current.addEventListener("keydown", handleKeyListener);

		return () => {
			headerRef.current.removeEventListener("keydown", handleKeyListener);
		}
	}, [handleKeyTrap]);


	return (
		<Wrapper id="header" ref={headerRef}>
			<SkipToMain href="#main">
				메뉴 건너뛰기
			</SkipToMain>
			<Container>
				<StyledLogo>
					<LogoLink href="/">
						<h1 className="a11y">
							wanted
						</h1>
						<img src={logo} alt="logo"/>
					</LogoLink>
				</StyledLogo>
				<GlobalNav
					ref={gnbRef}
					lnbRef={lnbRef}
					isShowLnb={isShowLnb}
					handleGnbHover={handleGnbHover}
					handleHideLnb={handleHideLnb}
				/>
				<GlobalUtilMenu ref={utilRef}/>
			</Container>
		</Wrapper>
	);
};
