import React from 'react';
import styled from 'styled-components/macro';

import UtilMenuItem from "components/util_menu_item";
import {ReactComponent as Search } from "assets/icon/ic_search.svg";
import {ReactComponent as Alarm } from "assets/icon/ic_alarm.svg";
import profileImg from 'assets/images/profile.jpg';


const Wrapper = styled.div`
	padding: .9rem 0;
`
const Container = styled.ul`
  display: flex;
`
const StyledUtilItem = styled(UtilMenuItem)`
`
const StyledSearch = styled(Search)`
	width: 1.8rem;
	height: 1.8rem;
`
const StyledAlarm = styled(Alarm)`
  width: 1.8rem;
  height: 1.8rem;
`
const StyledCircle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 3.2rem;
	height: 3.2rem;
	border-radius: 50%;
	border: 1px solid ${({theme}) => theme.colors.lightGreyColor};
`
const StyledProfile = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
	background: center / cover url(${profileImg}) no-repeat;
`
const StyledDashBoardButton = styled(UtilMenuItem)`
	height: 3rem;
	border-radius: 1.5rem;
	border: 1px solid ${({theme}) => theme.colors.lightGreyColor};
	padding: 0 1rem;
	font-size: ${({theme}) => theme.fontSizes.small};
	color: ${({theme}) => theme.colors.greyColorA};
`

export default function GlobalUtilMenu() {
	return (
		<Wrapper>
			<Container>
				<UtilMenuItem label="검색하기 버튼">
					<StyledSearch />
				</UtilMenuItem>
				<UtilMenuItem label="알림내역 확인 버튼">
					<StyledAlarm />
				</UtilMenuItem>
				<StyledUtilItem label="내정보관리 버튼">
					<StyledCircle>
						<StyledProfile>
							<span className='hidden'>프로필 사진</span>
						</StyledProfile>
					</StyledCircle>
				</StyledUtilItem>
				<StyledDashBoardButton link="/">
					기업 서비스
				</StyledDashBoardButton>
			</Container>
		</Wrapper>
	);
};

GlobalUtilMenu.defaultProps = {
	
};

