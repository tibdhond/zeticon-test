import { Injectable } from '@angular/core';
import { RECORDS } from './mock/mock-records-result';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor() { }


  getRecord(id: string) {
    return RECORDS.Results.find(rec => rec.Internal.RecordId === id);
  }
}
