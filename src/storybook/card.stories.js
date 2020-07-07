import {withKnobs, text} from '@storybook/addon-knobs';
import {moduleMetadata} from '@storybook/angular';
import { CardComponent } from 'src/app/core/components/card/card.component';
import {MaterialModule} from 'src/app/core/modules/material.module';
import '@storybook/addon-console';

export default {
	title: 'app-card',
	decorators: [
		moduleMetadata({
			imports: [MaterialModule],
			declarations: [CardComponent]
		}),
		withKnobs
	],
	parameters: {
		notes: 'Here are some notes'
	}
};

export const basicCardComponent = () => ({
	component: CardComponent,
	props: {
		cardTitle: text('cardTitle', 'Story Card Title'),
		cardSubTitle: text('cardSubTitle', 'Story Card Sub-Title')
	}
});

export const withContent = () => ({
	component: CardComponent,
	props: {
		title: text('cardTitle', 'Story Card Title'),
		subTitle: text('cardSubTitle', 'Story Card Sub-Title')
	},
	template: `<app-card [cardTitle]="title" [cardSubTitle]="subTitle"><div content>Here is a content div</div></app-card>`
});

export const withActions = () => ({
	component: CardComponent,
	props: {
		title: text('cardTitle', 'Story Card Title'),
		subTitle: text('cardSubTitle', 'Story Card Sub-Title')
	},
	template: `<app-card [cardTitle]="title" [cardSubTitle]="subTitle"><div actions><button>Action 1</button><button>Action 2</button></div></app-card>`
});
