import { Start } from 'blackfox-spa-generator';

const menu = [
	{
		'code': 'about',
		'name': 'About',
		'order': 1,
		'url': '#about'
	},
	{
		'code': 'sample',
		'name': 'Sample MD',
		'order': 2,
		'url': '#sample',
		'path': '/templates/sample.md'
	}
];

Start({ type: 'spa', menu });
