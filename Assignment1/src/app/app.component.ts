import { Component } from '@angular/core';
import {LogUpdateService} from './services/LogUpdate/log-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private logService: LogUpdateService) {
  }
}
