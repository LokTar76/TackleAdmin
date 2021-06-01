import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  constructor() { }

  invokeRefreshReelList = new EventEmitter();
  invokeRefreshRodList = new EventEmitter();
  refreshReel: Subscription;
  refreshRod: Subscription;

  onRefreshReelList() {
    this.invokeRefreshReelList.emit();
  }

  onRefreshRodList() {
    this.invokeRefreshRodList.emit();
  }
}
