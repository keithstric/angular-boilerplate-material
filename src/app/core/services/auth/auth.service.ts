import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {tap} from 'rxjs/operators';
import {ApiEndpoints, ApiMethod} from 'src/app/core/interfaces/api.interface';
import {LocalStorageTypes} from 'src/app/core/interfaces/local-storage.interface';
import {RawUser, User} from 'src/app/core/models/user.model';
import {ErrorService} from 'src/app/core/services/error/error.service';
import {HttpService} from 'src/app/core/services/http/http.service';
import {LocalStorageService} from 'src/app/core/services/local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authData: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(
    private _http: HttpService,
    private _localStorage: LocalStorageService,
    private _error: ErrorService
  ) { }

  isAuthenticated() {
    return !!this._localStorage.getItem(LocalStorageTypes.SESSION, 'user');
  }

  getUser() {
    return User.deserialize(this._localStorage.getItem(LocalStorageTypes.SESSION, 'user'));
  }

  getUserInitials() {
    if (this.getUser()) {
      return this.getUser().initials;
    }
    return null;
  }

  login(loginData) {
    return this._http.requestCall(ApiEndpoints.LOGIN, ApiMethod.POST, loginData)
      .pipe(tap((resp: RawUser) => {
        const user: User = User.deserialize(resp);
        this._localStorage.setItem(LocalStorageTypes.SESSION, 'user', user);
        this.authData.next(user);
        return user;
      }));
  }

  logout() {
    return this._http.requestCall(ApiEndpoints.LOGOUT, ApiMethod.GET)
      .pipe(tap((args) => {
        this._localStorage.removeItem(LocalStorageTypes.SESSION, 'user');
        this.authData.next(null);
        return args;
      }));
  }

  register(registrationData) {
    return this._http.requestCall(ApiEndpoints.REGISTER, ApiMethod.POST, registrationData)
      .pipe(tap((resp: RawUser) => {
        const user: User = User.deserialize(resp);
        this._localStorage.setItem(LocalStorageTypes.SESSION, 'user', user);
        this.authData.next(user);
        return user;
      }));
  }

  changePassword(chgPwData) {
    return this._http.requestCall(ApiEndpoints.CHANGE_PW, ApiMethod.PUT, chgPwData)
      .pipe(tap((resp: RawUser) => {
        const user: User = User.deserialize(resp);
        this._localStorage.setItem(LocalStorageTypes.SESSION, 'user', user);
        this.authData.next(user);
        return user;
      }));
  }

  forgotPassword(forgotPwData) {
    return this._http.requestCall(ApiEndpoints.FORGOT, ApiMethod.PUT, forgotPwData);
  }
}
