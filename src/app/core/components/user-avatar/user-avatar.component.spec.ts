import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {AuthService} from 'src/app/core/services/auth/auth.service';
import {MockAuthService} from 'src/app/testing/mock-services';

import {UserAvatarComponent} from './user-avatar.component';

describe('UserAvatarComponent', () => {
	let component: UserAvatarComponent;
	let fixture: ComponentFixture<UserAvatarComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [UserAvatarComponent],
			providers: [
				{provide: AuthService, useClass: MockAuthService}
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(UserAvatarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
