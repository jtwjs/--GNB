import React, { useState, useCallback } from 'react';


export default function useShowLnb() {
	const [isShowLnb, setIsShowLnb] = useState(false);
	const handleShowLnb = useCallback(() => {
		setIsShowLnb(true);
	},[isShowLnb]);

	const handleGnbHover = useCallback((e) => {
		const {gnbKind: kind} = e.target.parentNode.dataset;

		kind === 'explore' ? handleShowLnb() : handleHideLnb();

	},[isShowLnb]);

	const handleHideLnb = useCallback(() => {
		setIsShowLnb(false);
	}, [isShowLnb]);

	return {isShowLnb, handleShowLnb, handleHideLnb, handleGnbHover};
};

