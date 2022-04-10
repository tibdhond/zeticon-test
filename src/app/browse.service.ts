import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrowseService {

  private previewIndexWatcher = new BehaviorSubject<number>(-1);

  emitIndexUpdate(index: number) {
    this.previewIndexWatcher.next(index);
  }

  previewIndexListener(): Observable<number> {
    return this.previewIndexWatcher.asObservable();
  }
}
