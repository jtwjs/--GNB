import { useState, useCallback } from 'react';


export default function useShowLnb() {
	const [isShowLnb, setIsShowLnb] = useState(false);
	const handleShowLnb = useCallback(() => {
		setIsShowLnb(true);
	},[]);

	const handleHideLnb = useCallback(() => {
		setIsShowLnb(false);
	}, []);

	const handleGnbHover = useCallback((e) => {
		const {gnbKind: kind} = e.target.parentNode.dataset;

		kind === 'explore' ? handleShowLnb() : handleHideLnb();

	},[handleShowLnb, handleHideLnb]);


	return {isShowLnb, handleShowLnb, handleHideLnb, handleGnbHover};
};

