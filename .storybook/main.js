const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.[tj]s'],
	addons: [
		'@storybook/addon-actions/register',
		'@storybook/addon-knobs/register',
		'@storybook/addon-notes/register',
		{
			name: '@storybook/addon-storysource',
			options: {
				rule: {
					include: [path.resolve(__dirname, '../src')]
				},
				loaderOptions: {
					parser: 'typescript',
					prettierConfig: {
						printWidth: 100,
						tabWidth: 2,
						bracketSpacing: true,
						singleQuote: true
					}
				},
				enforce: 'pre'
			}
		}
	]
}
