import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {tap} from 'rxjs/operators';
import {ApiEndpoints, ApiMethod} from 'src/app/core/interfaces/api.interface';
import {LocalStorageTypes} from 'src/app/core/interfaces/local-storage.interface';
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
    return this._localStorage.getItem(LocalStorageTypes.SESSION, 'user');
  }

  login(loginData) {
    return this._http.requestCall(ApiEndpoints.LOGIN, ApiMethod.POST, loginData)
      .pipe(tap((resp) => {
        this._localStorage.setItem(LocalStorageTypes.SESSION, 'user', resp);
        this.authData.next(resp);
        return resp;
      }));
  }

  register(registrationData) {
    return this._http.requestCall(ApiEndpoints.REGISTER, ApiMethod.POST, registrationData)
      .pipe(tap((resp) => {
        this._localStorage.setItem(LocalStorageTypes.SESSION, 'user', resp);
        this.authData.next(resp);
        return resp;
      }));
  }

  changePassword(chgPwData) {
    return this._http.requestCall(ApiEndpoints.CHANGE_PW, ApiMethod.PUT, chgPwData);
  }

  forgotPassword(forgotPwData) {
    return this._http.requestCall(ApiEndpoints.FORGOT, ApiMethod.PUT, forgotPwData);
  }
}
