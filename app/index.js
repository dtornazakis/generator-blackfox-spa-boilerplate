const Generator = require('yeoman-generator');

module.exports = class extends Generator {
	constructor(args, opts) {
		super(args, opts);
		this.log('starting generator...');
	}

	start() {

		this.prompt([
			{
        type	: 'input',
        name	: 'packageName',
        message	: 'Enter the projects name (without spaces only dashes)',
    	},
			{
        type	: 'input',
        name	: 'domain',
        message	: 'Enter the domain name',
    	},
			{
        type	: 'confirm',
        name	: 'protocol',
        message	: 'Will the application be secured with an SSL certificate',
        default	: true
    	},
    	{
        type	: 'input',
        name	: 'port',
        message	: 'Specify (if needed), a port for this application',
        default	: false
    	},
    	{
        type	: 'input',
        name	: 'title',
        message	: 'Specify the name of the application'
    	},
    	{
        type	: 'input',
        name	: 'shortTitle',
        message	: 'Specify the short name for the application'
    	},
    	{
        type	: 'input',
        name	: 'description',
        message	: 'Describe the application in a few words'
    	},
    	{
        type	: 'input',
        name	: 'theme',
        message	: 'Specify the theme color of the application (in hex format without the `#` sign)'
    	}
		]).then((answers) => {

			// create destination folder
			this.destinationRoot();

			this.fs.copy(
				this.templatePath('images'),
				this.destinationPath('src/images')
			);

			this.fs.copy(
				this.templatePath('scripts'),
				this.destinationPath('src/scripts')
			);

			this.fs.copy(
				this.templatePath('stylesheets'),
				this.destinationPath('src/stylesheets')
			);

			this.fs.copy(
				this.templatePath('vendor'),
				this.destinationPath('src/vendor')
			);

			this.fs.copy(
				this.templatePath('.babelrc'),
				this.destinationPath('.babelrc')
			);

			this.fs.copy(
				this.templatePath('.editorconfig'),
				this.destinationPath('.editorconfig')
			);

			this.fs.copy(
				this.templatePath('.eslintrc.js'),
				this.destinationPath('.eslintrc.js')
			);

			this.fs.copy(
				this.templatePath('.gitignore'),
				this.destinationPath('.gitignore')
			);

			this.fs.copy(
				this.templatePath('gulpfile.js'),
				this.destinationPath('gulpfile.js')
			);
			this.fs.copy(
				this.templatePath('README.md'),
				this.destinationPath('README.md')
			);

			this.fs.copy(
				this.templatePath('rollup.config.js'),
				this.destinationPath('rollup.config.js')
			);

			var date = new Date();
			var timestamp = date.toISOString();

			this.fs.copyTpl(
				this.templatePath('sitemap.xml'),
				this.destinationPath('src/sitemap.xml'),
				{
					sitemap: {
						changeFrequency: 'yearly',
						lastModified: timestamp,
						url: (answers.protocol ? 'https://' : 'http://') + answers.domain + (answers.port ? ':' + answers.port : '') + '/'
					},
					timestamp: timestamp
				}
			);

			this.fs.copyTpl(
				this.templatePath('manifest.json'),
				this.destinationPath('src/manifest.json'),
				{
					title: answers.title,
					shortTitle: answers.shortTitle || answers.title,
					url: (answers.protocol ? 'https://' : 'http://') + answers.domain + (answers.port ? ':' + answers.port : '') + '/',
					theme: answers.theme ? '#' + answers.theme : '#000000'
				}
			);

			this.fs.copyTpl(
				this.templatePath('config/local.json'),
				this.destinationPath('src/config/local.json'),
				{
					domain: answers.domain,
					protocol: answers.protocol ? 'https://' : 'http://',
					port: answers.port,
					title: answers.title,
					shortTitle: answers.shortTitle || answers.title,
					theme: answers.theme ? '#' + answers.theme : '#000000'
				}
			);

			this.fs.copyTpl(
				this.templatePath('config/production.json'),
				this.destinationPath('src/config/production.json'),
				{
					domain: answers.domain,
					protocol: answers.protocol ? 'https://' : 'http://',
					port: answers.port,
					title: answers.title,
					shortTitle: answers.shortTitle || answers.title,
					theme: answers.theme ? '#' + answers.theme : '#000000'
				}
			);

			this.fs.copyTpl(
				this.templatePath('package.json'),
				this.destinationPath('package.json'),
				{
					packageName: answers.packageName,
					description: answers.description
				}
			);

			this.fs.copyTpl(
				this.templatePath('index.html'),
				this.destinationPath('src/index.html'),
				{
					author: 'Dimitris Tornazakis',
					keywords: 'A, list, of, keywords, goes, here',
					robots: 'index,follow',
					title: answers.title,
					description: answers.description,
					domain: answers.domain,
					theme: answers.theme ? '#' + answers.theme : '#000000',
					url: (answers.protocol ? 'https://' : 'http://') + answers.domain + (answers.port ? ':' + answers.port : '') + '/',
					contact: {
						address: 'sample address',
						phone: '+(30) 210.00.00.000',
						email: 'info@' + answers.domain
					}
				}
			);
		});
	}
}

