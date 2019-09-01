import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { SnackbarComponent } from './snackbar-component/snackbar.component';

@Injectable({
  providedIn: 'root'
})


export class SnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  notify(msg: any, type: number) {

    let className = '';
    if (type === 1) {
      className = 'snack-success';
    }
    if (type === 2) {
      className = 'snack-error';
    }
    this.snackBar.open(msg, 'X', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
      panelClass: ['snackbar', className]
    });
  }


  notifyHtml(html: any, type: number) {

    let className = '';
    if (type === 1) {
      className = 'snack-success';
    }
    if (type === 2) {
      className = 'snack-error';
    }
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
      data: html,
      panelClass: ['snackbar', className]
    });
  }
}
