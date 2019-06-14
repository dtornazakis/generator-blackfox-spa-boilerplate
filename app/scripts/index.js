import { Start } from 'base-repository-system';

const menu = [
	{
		'code': 'about',
		'name': 'About',
		'order': 1,
		'url': '#about'
	},
	{
		'code': 'vote',
		'name': 'Vote MD',
		'order': 2,
		'url': '#vote',
		'path': '/templates/pages/votes.md'
	}
];

Start({ type: 'spa', menu });
