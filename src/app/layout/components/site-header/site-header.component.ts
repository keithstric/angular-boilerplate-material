import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {ApiEndpoints, ApiMethod} from 'src/app/core/interfaces/api.interface';
import {LocalStorageTypes} from 'src/app/core/interfaces/local-storage.interface';
import {HttpService} from 'src/app/core/services/http/http.service';
import {LocalStorageService} from 'src/app/core/services/local-storage/local-storage.service';
import {HeaderService} from 'src/app/layout/services/header/header.service';
import {PROJECT_NAME} from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent implements OnInit {
  title: string;
  titleSub: Subscription;

  constructor(
    private _header: HeaderService,
    private _storage: LocalStorageService,
    private _router: Router,
    private _http: HttpService
  ) { }

  ngOnInit(): void {
    this.listenToTitle();
  }

  private listenToTitle() {
    this.titleSub = this._header.currentHeaderTitleSub.subscribe((headerTitle: string) => {
      this.title = headerTitle;
    });
  }

  logout() {
    this._http.requestCall(ApiEndpoints.LOGOUT, ApiMethod.GET)
      .subscribe((args) => {
        this._storage.removeItem(LocalStorageTypes.SESSION, 'user');
        this._router.navigateByUrl('/auth/login');
      });
  }
}
