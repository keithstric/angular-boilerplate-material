import {Injectable} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import {titleCaseString} from 'src/app/core/utils/string.utils';
import {HeaderService} from 'src/app/layout/services/header/header.service';
import {Breadcrumb} from 'src/app/layout/interfaces/breadcrumb.interface';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  breadcrumbs: Breadcrumb[] = [];
  breadcrumbsSub: BehaviorSubject<any[]> = new BehaviorSubject<Breadcrumb[]>([]);

  constructor(
    private _router: Router,
    private _header: HeaderService
  ) {
    _router.events.subscribe((evt) => {
      if (evt instanceof NavigationStart) {
        if (evt.navigationTrigger === 'popstate') {
          this.goBackOne();
        }
      } else if (evt instanceof NavigationEnd) {
        const title = this._getBcTitle(evt.urlAfterRedirects);
        if (title && title !== 'Unknown') {
          this.addBreadcrumb({
            url: evt.urlAfterRedirects,
            title
          });
        }
      }
    });
  }

  addBreadcrumb(breadCrumb: Breadcrumb) {
    const breadcrumbExists = this.breadcrumbs.find(bc => bc.url === breadCrumb.url);
    if (!breadcrumbExists) {
      this.breadcrumbs.push(breadCrumb);
      this.breadcrumbsSub.next(this.breadcrumbs);
      this._header.updateHeaderTitle(breadCrumb.title);
    }
  }

  goBackOne() {
    this.breadcrumbs.pop();
    this.breadcrumbsSub.next(this.breadcrumbs);
  }

  private _getBcTitle(url: string): string {
    const urlArr = url.split('/');
    const unCasedTitle = urlArr[urlArr.length - 1] || 'Unknown';
    return titleCaseString(unCasedTitle);
  }

}
