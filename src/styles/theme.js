const calcRem = size => `${size / 10}rem`;

const breakpoint = {
	laptop: 1200,
	tablet: 992,
	mobile: 767
}

const device = {
	laptop: `(max-width: ${breakpoint.laptop}px)`,
	tablet: `(max-width: ${breakpoint.tablet}px)`,
	mobile: `(max-width: ${breakpoint.mobile}px)`,
}

const colors = {
	blackColor: '#333333',
	whiteColor: '#ffffff',
	greyColorA: '#666666',
	greyColorB: '#999999',
	greyColorC: '#dddddd',
	lightGreyColor: '#e1e2e3',
	blueColor: '#258bf7'
}

const fontSizes = {
	xs: calcRem(8),
	small: calcRem(13),
	base: calcRem(14),
	large: calcRem(17)
}

export const theme = {
	device,
	colors,
	fontSizes
};