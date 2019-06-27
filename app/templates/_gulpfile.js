const gulp        		= require('gulp');
const babel						= require('rollup-plugin-babel');
const autoprefixer 		= require('gulp-autoprefixer');
const commonjs 				= require('rollup-plugin-commonjs');
const concat 					= require('gulp-concat');
const cleanCSS 				= require('gulp-clean-css');
const eslint 					= require('rollup-plugin-eslint');
const handlebars  		= require('gulp-compile-handlebars');
const sass        		= require('gulp-sass');
const sourcemaps			= require('gulp-sourcemaps');
const rename     			= require('gulp-rename');
const replace     		= require('gulp-token-replace');
const server      		= require('gulp-server-livereload');
const strip 					= require('rollup-plugin-strip');
const resolve  				= require('rollup-plugin-node-resolve');
const runSequence 		= require('run-sequence');
const rollup 					= require('rollup');
const localConfig 		= require('./src/config/local.json');
const productionConfig= require('./src/config/production.json');

const input  = {
	html        : 'src/index.html',
	images      : 'src/images/**',
	stylesheets : 'src/stylesheets/**/*.sass',
	scripts    	: 'src/scripts/**/*.js',
	vendor      : 'src/vendor/**',
	templates   : 'src/templates/**/*.md',
	misc				: ['scr/robots.txt', 'src/manifest.json', 'src/sitemap.xml', 'src/sw.js']
};

const output = {
	images: 'dist/images/',
	stylesheets: 'dist/stylesheets/',
	scripts: 'dist/scripts/',
	templates: 'dist/templates/',
	vendor: 'dist/vendor/',
	root: 'dist/'
};

const autoprefixerOptions = {
	browsers: ['last 5 versions', '> 5%']
};

gulp.task('default', ['watch']);

gulp.task('compile-css', function() {
	return gulp.src('src/stylesheets/app.sass')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(concat('bundle.css'))
  //only minify if gulp is ran with '--environment production || --environment staging'
  // .pipe((gutil.env.environment === 'production' || gutil.env.environment === 'staging') ? cleanCSS({compatibility: 'ie8'}) : gutil.noop())
  .pipe(autoprefixer(autoprefixerOptions))
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest(output.stylesheets));
});

gulp.task('compile-scripts', function() {

	return rollup.rollup({
		input: 'src/scripts/index.js',
		plugins: [
	  	// strip(),
	  	eslint.eslint(),
	  	resolve(),
	  	commonjs(),
	  	babel({
	      exclude: 'node_modules/**' // only transpile our source code
	    })
	  	]
	  }).then(function(bundle) {
	  	return bundle.write({
	  		file: 'dist/scripts/bundle.js',
	  		name: 'm',
	  		format: 'umd',
	  		sourcemap: true
	  	})
	  });

  // return b.bundle()
  //   .pipe(gulp.src('./src/scripts/index.js'))
  //   .pipe(gulp.dest(output.scripts));
});

gulp.task('compile-templates', function() {

	const options = {
    ignorePartials: true, //ignores the unknown footer2 partial in the handlebars template, defaults to false
    partials : { },
    batch : ['./src/templates/components', './src/templates/master'],
    helpers : {
    	capitals : function(str){
    		return str.toUpperCase();
    	}
    }
  }

  gulp.src('src/templates/pages/*.hbs')
  .pipe(handlebars({}, options))
  .pipe(rename(function(path) {
  	path.extname = '.html';
  }))
  .pipe(gulp.dest('dist'));
});


gulp.task('copy-templates', function() {

	return gulp.src(input.html)
	.pipe(gulp.dest(output.root));
});

gulp.task('copy-assets', function() {

	gulp.src(input.images)
	.pipe(gulp.dest(output.images));

	gulp.src(input.vendor)
	.pipe(gulp.dest(output.vendor));

	gulp.src(input.templates)
	.pipe(gulp.dest(output.templates));

	for (let misc of input.misc) {
		gulp.src(input.misc)
		.pipe(gulp.dest(output.root));
	}
});

gulp.task('token-replace', function(){
	return gulp.src(['dist/*.html', 'dist/**/*.js', 'dist/sitemap.xml', 'dist/manifest.json'])
	.pipe(replace({global:localConfig, prefix: '{%', suffix: '%}'}))
	.pipe(gulp.dest('dist'))
});

gulp.task('live-reload', function() {
	return gulp.src('dist/')
	.pipe(server({
		livereload: true,
		defaultFile: 'index.html',
		port: '8888',
		open: true
	}));
});

gulp.task('build', function() {
	runSequence(['copy-assets', 'compile-css', 'compile-scripts'],'token-replace');
});

gulp.task('serve', function() {
	runSequence(['copy-assets', 'compile-css', 'compile-scripts'],'token-replace', 'live-reload', 'watch');
});

gulp.task('deploy', ['build', 'optimize-images', 'upload']);

gulp.task('watch', function() {
	gulp.watch(input.html, function() {
		runSequence('copy-templates', 'token-replace');
	});
	gulp.watch(input.images, ['copy-assets']);
	gulp.watch(input.scripts, function() {
		runSequence('compile-scripts', 'token-replace');
	});
	gulp.watch(input.stylesheets, ['compile-css']);
	gulp.watch(input.templates, function() {
		runSequence('copy-assets', 'token-replace');
	});
});
