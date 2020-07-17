import {withKnobs} from '@storybook/addon-knobs';
import {moduleMetadata} from '@storybook/angular';
import {UserAvatarComponent} from 'src/app/core/components/user-avatar/user-avatar.component';
import {MaterialModule} from 'src/app/core/modules/material.module';
import {AuthService} from 'src/app/core/services/auth/auth.service';
import {MockStorybookUserAvatarComponent} from 'src/app/testing/mock-components';
import {MockAuthService} from 'src/app/testing/mock-services';

// @ts-ignore
import docs from './README.md';

export default {
	title: 'app-user-avatar',
	decorators: [
		moduleMetadata({
			imports: [MaterialModule],
			declarations: [UserAvatarComponent],
			providers: [
				{provide: AuthService, useClass: MockAuthService}
			]
		}),
		withKnobs
	],
	parameters: {
		notes: {markdown: docs},
		backgrounds: [
			{name: 'primary', value: '#f5f5f5', default: true}
		]
	}
};

export const withUser = () => ({
	component: UserAvatarComponent,
	template: `<div style="width: 48px; height: 48px;"><app-user-avatar></app-user-avatar></div>`
});

export const clickEvent = () => ({
	component: MockStorybookUserAvatarComponent
});
