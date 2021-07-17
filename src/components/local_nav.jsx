import React, {useMemo, forwardRef} from 'react';
import styled from 'styled-components/macro';
import {cloneDeep} from 'lodash';

import LocalNavItem from "components/local_nav_item";
import headerData from 'data/header.json';

const Wrapper = styled.div.attrs(({show}) => ({
	height: show ? 'calc(100vh - 5rem)' : 0,
	opacity: show ? 1 : 0,
}))`
  position: fixed;
  top: 5rem;
  left: 0;
  width: 100%;
  height: ${({height}) => height};
  background-color: rgba(0, 0, 0, 0.4);
  opacity: ${({opacity}) => opacity};
  overflow: hidden;
  transition: opacity .5s;
  z-index: 10000;

  @media screen and ${({theme}) => theme.device.mobile} {
    display: none;
  }
`;
const Container = styled.div.attrs(({show}) => ({
	height: show ? '100%' : 0
}))`
  width: 100%;
  height: ${({height}) => height};
  max-height: 38.7rem;
  padding: 4rem 0;
  background-color: ${({theme}) => theme.colors.whiteColor};
  overflow: hidden;
  transition: .5s;
`;
const CategoryWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 106rem;
  margin: 0 auto;

  @media screen and ${({theme}) => theme.device.laptop} {
    width: 90%;
  }
`;

const CATEGORY_MAX_LENGTH = 6;

const getCategories = (categories, maxNum) => {
	let result = categories;
	result[maxNum - 1].category = categories
		.filter((item, idx) => idx >= maxNum - 1)
		.map(item => item.category);
	return result.slice(0, maxNum);
}

const LocalNav = forwardRef(({show, handleMouseLeave}, ref) => {

	const categories = useMemo(() =>
			getCategories(cloneDeep(headerData.LNB), CATEGORY_MAX_LENGTH),
		[]);
	const handleDimMouseOver = (e) => {
		if (e.target.dataset?.type === 'dim') {
			handleMouseLeave();
		}
	}
	return (
		<Wrapper
			id="lnb"
			aria-hidden={!show}
			show={show}
			role="presentation"
			data-type="dim"
			onMouseOver={handleDimMouseOver}
		>
			<Container show={show}>
				<CategoryWrap ref={ref}>
					{
						categories.map((item, idx) => (
							<LocalNavItem
								key={idx}
								category={item.category}
								subCategory={item.subCategory}
							/>
						))
					}
				</CategoryWrap>
			</Container>
		</Wrapper>
	);
});

export default LocalNav;

