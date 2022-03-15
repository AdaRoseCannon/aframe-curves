import { terser } from "rollup-plugin-terser";
import strip from '@rollup/plugin-strip';

export default [
	{	
		input: "src/curve.js",
		output: {
			format: "iife",
			sourcemap: true,
			file: 'build/curve.js',
		}
	},
	{	
		input: "src/curve.js",
		output: {
			format: "iife",
			sourcemap: true,
			file: 'build/curve.min.js',
		},
		plugins: [
			strip({labels: ['documentation']}),
			terser()
		]
	},
];
