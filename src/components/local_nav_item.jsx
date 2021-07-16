import React from 'react';
import styled from 'styled-components/macro';

import Arrow from "assets/icon/ic_arrow-right.svg";

const Wrapper = styled.li`
	display: flex;
	flex-direction: column;
	width: 16.6666%;
	
	&:not(:last-child) {
		padding-right: 2rem;
	}
`;
const CategoryWrap = styled.div`
	display: flex;
	flex-direction: column;
`

const Category = styled.a`
	display: block;
	padding-bottom: 1.5rem;
	cursor: pointer;
`
const CategoryTitle = styled.h3`
	position: relative;
	padding-right: 1rem;
	font-size: ${({theme}) => theme.fontSizes.large};
	font-weight: 500;
	line-height: 1.17;
	color: ${({theme}) => theme.colors.blackColor};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
	
	&::before {
		content: '';
		position: absolute;
		top: 50%;
		right: 0;
		width: 1rem;
		height: 1rem;
		background: center / cover url(${Arrow}) no-repeat;
		transform: translateY(-50%);
	}
`
const SubCategoryWrap = styled.ul`
`
const SubCategory = styled.li`
	padding: .5rem 0;
	
	&:last-child > a::before {
		content: '';
    position: absolute;
    top: 50%;
    right: 0;
    width: 1rem;
    height: 1rem;
    background: center / cover url(${Arrow}) no-repeat;
    transform: translateY(-50%);
	}
`
const SubCategoryLink = styled.a`
  position: relative;
  display: block;
	width: 100%;
	padding-right: 1rem;
	font-size: ${({theme}) => theme.fontSizes.small};
	line-height: 1.1;
  color: ${({theme}) => theme.colors.greyColorB};
	text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

export default function LocalNavItem({ category, subCategory }) {
	return (
		<Wrapper>
			{
				Array.isArray(category)
				? <CategoryWrap>
						{
							category.map((item, index) => (
									<Category href={item.link} key={index}>
										<CategoryTitle>
											{item.title}
										</CategoryTitle>
									</Category>
							))
						}
					</CategoryWrap>
				:	<>
					<Category href={category.link}>
						<CategoryTitle>
							{category.title}
						</CategoryTitle>
					</Category>
					<SubCategoryWrap>
					{
						subCategory.map(item => (
						<SubCategory key={item.title}>
							<SubCategoryLink href={item.link}>
								{item.title}
							</SubCategoryLink>
						</SubCategory>
						))
					}
					</SubCategoryWrap>
				</>
			}
		</Wrapper>
	);
};

