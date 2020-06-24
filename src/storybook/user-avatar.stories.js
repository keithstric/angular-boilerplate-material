import {withKnobs} from '@storybook/addon-knobs';
import {moduleMetadata} from '@storybook/angular';
import {UserAvatarComponent} from 'src/app/core/components/user-avatar/user-avatar.component';
import {MaterialModule} from 'src/app/core/modules/material.module';
import {AuthService} from 'src/app/core/services/auth/auth.service';
import {MockAuthService} from 'src/app/testing/mock-services';

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
		notes: 'Here are some notes'
	}
};

export const withUser = () => ({
	component: UserAvatarComponent,
	template: `<div style="width: 48px; height: 48px;"><app-user-avatar></app-user-avatar></div>`
});
