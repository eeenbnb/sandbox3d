import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PageEventService {
  private eventSource = new Subject<string>();
  private stateSource = new Subject<string>();

  public eventData = this.eventSource.asObservable();
  public stateData = this.stateSource.asObservable();


  constructor() {}

  sendEventData(msg: string) {
    this.eventSource.next(msg);
  }
  sendStateData(msg: string) {
    this.stateSource.next(msg);
  }

}
