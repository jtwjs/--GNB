import React, {useMemo} from 'react';
import styled from 'styled-components/macro';
import {cloneDeep} from 'lodash';

import LocalNavItem from "components/local_nav_item";
import headerData from 'data/header.json';

const Wrapper = styled.div`
	position: absolute;
	top: 5rem;
	left: 0;
	width: 100%;
	height: calc(100vh - 50px);
  background-color: rgba(0,0,0,0.4);
  z-index: 10000;
`;
const Container = styled.div`
	width: 100%;
	padding: 4rem 0 ;
	background-color: ${({theme}) => theme.colors.whiteColor}; 
`;
const CategoryWrap = styled.ul`
	display: flex;
	flex-wrap: wrap;
	max-width: 106rem;
	margin: 0 auto;
` ;

const CATEGORY_MAX_LENGTH = 6;

const getCategories = (categories, maxNum) => {
	let result = categories;
	result[maxNum -1].category = categories
		.filter((item, idx) => idx >= maxNum - 1)
		.map(item => item.category);
	return result.slice(0, maxNum);
}

export default function LocalNav(props) {

	const categories = getCategories(cloneDeep(headerData.LNB), CATEGORY_MAX_LENGTH);

	return (
		<Wrapper>
			<Container>
				<CategoryWrap>
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
};

LocalNav.defaultProps = {

};

