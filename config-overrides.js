// 此文件是用来覆盖部分CRA原有的webpack配置
// 这些配置的目的是将 px 单位转换成 vw 或者 vh 单位，为的是移动端适配
// 如果不想转换单位，额外加上ignore即可
// 同时解决低版本安卓端出现的一些bug

const postcssAspectRatioMini = require('postcss-aspect-ratio-mini');
const postcssPxToViewport = require('postcss-px-to-viewport');
const postcssWriteSvg = require('postcss-write-svg');
const postcssViewportUnits = require('postcss-viewport-units');
const cssnano = require('cssnano');

module.exports = function override(config, env) {
	require('react-app-rewire-postcss')(config, {
		plugins: loader => [
			// 解决长宽比问题
			postcssAspectRatioMini({}),
			postcssPxToViewport({
				viewportWidth: 750, // (Number) The width of the viewport.
				viewportHeight: 1334, // (Number) The height of the viewport.
				unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to.
				viewportUnit: 'vw', // (String) Expected units.
				selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px.
				minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
				mediaQuery: false // (Boolean) Allow px to be converted in media queries.
			}),
			// 解决1px的方案
			postcssWriteSvg({
				utf8: false
			}),
			postcssViewportUnits({}),
			cssnano({
				preset: 'default',
				autoprefixer: false,
				'postcss-zindex': false
			})
		]
	});

	return config;
};
