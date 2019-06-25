// plugins
import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';

export default {
	input: 'src/scripts/index.js',
	output: {
		file: 'dist/scripts/bundle.min.js',
		format: 'iife',
		sourcemap: 'inline'
	},
	plugins: [
		babel({
			exclude: 'node_modules/**'
		}),
		eslint({
			exclude: ['src/stylesheets/**']
		})
	]
};


// https://www.youtube.com/watch?v=ICYLOZuFMz8
