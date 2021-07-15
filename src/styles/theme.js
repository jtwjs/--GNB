const calcRem = size => `${size / 10}rem`;

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
	colors,
	fontSizes
};