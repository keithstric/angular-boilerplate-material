import {Component, OnInit} from '@angular/core';
import {delay} from 'rxjs/operators';
import {LoadingService} from 'src/app/layout/services/loading/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-boilerplate';
  loading: boolean = false;

  constructor(
    private _loading: LoadingService
  ){ }

  ngOnInit() {
    this.listenToLoading();
  }

  listenToLoading() {
    this._loading.loadingSub
      .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
      .subscribe((loading) => {
        this.loading = loading;
      });
  }
}
