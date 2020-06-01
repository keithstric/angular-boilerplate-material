import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig, MatSnackBarDismiss, MatSnackBarRef} from '@angular/material/snack-bar';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  snackbarRef: MatSnackBarRef<any>;
  snackbarConfig: MatSnackBarConfig = {
    horizontalPosition: 'center',
    verticalPosition: 'bottom'
  };

  constructor(
    private _snackbar: MatSnackBar
  ) { }

  notifyUser(msg: string, duration?: number, action?: string, actionFn?: (...args) => void) {
    duration = duration ? duration : 3000;
    action = action || 'dismiss';
    this.snackbarRef = this._snackbar.open(msg, action, {...this.snackbarConfig, duration});
    this.snackbarRef.afterDismissed().subscribe((matSnackbarDismissedEvt: MatSnackBarDismiss) => {});
    this.snackbarRef.onAction().subscribe(() => {
      if (actionFn) {
        actionFn();
      }
    });
  }
}
