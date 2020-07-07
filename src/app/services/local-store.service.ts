import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from './http.service';

@Injectable()
export class LocalStoreService {
  private _jsonURL = 'assets/data-store.json';
  localStore = new BehaviorSubject(null);
  localStore$ = this.localStore.asObservable();
  constructor(
    private httpService: HttpService
  ) {}

  loadStore() {
   this.httpService.httpGetService(this._jsonURL, true).subscribe(store=>{this.localStore.next(store);console.log('Store Loaded!')});
  }
}
