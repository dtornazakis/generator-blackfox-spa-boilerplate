const Generator = require('yeoman-generator');

module.exports = class extends Generator {
	constructor(args, opts) {
		super(args, opts);
		this.log('starting generator...');
	}

	start() {

		this.prompt([
		{
			type    : 'input',
			name    : 'name',
			message : 'Enter a house (i.e.: myNewComponent): '
		},
		{
	        type	: 'input',
	        name	: 'domain',
	        message	: 'Enter the domain name',
      	},
		{
	        type	: 'confirm',
	        name	: 'protocol',
	        message	: 'Will the site be secured with an SSL certificate',
	        default	: true
      	},
      	{
	        type	: 'input',
	        name	: 'port',
	        message	: 'Specify (if needed), a port for this site',
	        default	: false
      	}
		]).then((answers) => {

			// create destination folder
			this.destinationRoot('src');

			// this.fs.copyTpl(
			// 	this.templatePath('src'),
			// 	this.destinationPath('./src')
			// );

			this.fs.copy(
				this.templatePath('images'),
				this.destinationPath('images')
			);

			this.fs.copy(
				this.templatePath('config'),
				this.destinationPath('config')
			);

			var date = new Date();
			var timestamp = date.getTime();


			this.fs.copyTpl(
				this.templatePath('sitemap.xml'),
				this.destinationPath('sitemap.xml'),
				{
					sitemap: {
						changeFrequency: 'no',
						lastModified: timestamp,
						url: (answers.protocol ? 'https://' : 'http://') + answers.domain + (answers.port ? ':' + answers.port : '')
					},
					timestamp: timestamp
				}
			);
		});
	}
}

