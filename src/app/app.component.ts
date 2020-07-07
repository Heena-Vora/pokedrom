import { Component } from '@angular/core';
import { LocalStoreService } from './services/local-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';
  constructor(localStore: LocalStoreService) {
    localStore.loadStore();
  }
}
