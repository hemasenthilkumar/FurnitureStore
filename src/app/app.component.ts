import { Component } from '@angular/core';
import {loggedIn} from './shared/signup';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FurnitureStoreAng';
  logg=loggedIn;
}
