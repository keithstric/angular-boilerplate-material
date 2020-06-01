import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
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
    return new Promise((resolve, reject) => {
      this._http.requestCall(ApiEndpoints.LOGIN, ApiMethod.POST, loginData)
        .subscribe((resp) => {
          this._localStorage.setItem(LocalStorageTypes.SESSION, 'user', resp);
          this.authData.next(resp);
          resolve(resp);
        });
    });
  }
}
