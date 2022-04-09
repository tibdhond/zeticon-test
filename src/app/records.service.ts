import { Injectable } from '@angular/core';
import { RECORDS } from './mock/mock-records-result';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor() { }

  getRecords() {
    return RECORDS.Results;
  }
}
