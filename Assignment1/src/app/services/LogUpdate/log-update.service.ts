import { Injectable } from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class LogUpdateService {

  constructor(updates: SwUpdate, private snackBar: MatSnackBar) {
    updates.available.subscribe(event => {
      console.log('update available!!!!');
      snackBar.open('An update is available!', 'Close', {
        duration: 3000
      });
    });
    updates.activated.subscribe(event => {
      console.log('BLAHBLAHBALH');
      snackBar.open('The update has been applied!', 'Close', {
        duration: 3000
      });
    });
  }
}
