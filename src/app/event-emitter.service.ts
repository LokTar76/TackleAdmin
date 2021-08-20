import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  constructor() { }

  invokeRefreshReelList = new EventEmitter();
  invokeRefreshRodList = new EventEmitter();
  invokeRefreshComboList = new EventEmitter();

  refreshReel: Subscription;
  refreshRod: Subscription;
  refreshCombo: Subscription;

  onRefreshReelList() {
    this.invokeRefreshReelList.emit();
  }

  onRefreshRodList() {
    this.invokeRefreshRodList.emit();
  }

  onRefreshComboList() {
    this.invokeRefreshReelList.emit();
  }
}
