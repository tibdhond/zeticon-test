import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RECORDS } from '../mock/mock-records-result';
import { RecordItem } from '../models/record';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  private baseUrl = "https://integration.mediahaven.com/mediahaven-rest-api/v2/";
  private startIndexWatcher = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient) { }

  startIndexListener():Observable<number> {
    return this.startIndexWatcher.asObservable();
  }

  emitStartIndexUpdate(startIndex: number) {
    this.startIndexWatcher.next(startIndex);
  }

  getRecordsMock(startIndex: number): Observable<ResultType> {
    return (new BehaviorSubject<ResultType>(RECORDS)).asObservable();
  }

  getRecords(startIndex: number): Observable<{
    "NrOfResults": number,
    "StartIndex": number,
    "TotalNrOfResults": number,
    "Results": RecordItem[]
  }> {
    const options = {
      "params": {
        "startIndex": startIndex,
        "nrOfResults": 25,
        "sort": "relevance",
        "direction": "Desc",
        "key": ""
      }
    }
    return this.http.get<ResultType>(`${this.baseUrl}records`, options);
  }

  getRecordMock(id: string): Observable<RecordItem | undefined> {
    return new BehaviorSubject<RecordItem | undefined>(RECORDS.Results.find(rec => rec.Internal.RecordId === id)).asObservable();
  }

  getRecord(id: string): Observable<RecordItem | undefined> {
    const option = {
      "key": ""
    }

    return this.http.get<RecordItem>(`${this.baseUrl}records/${id}`);
  }
}

interface ResultType {
  "NrOfResults": number,
  "StartIndex": number,
  "TotalNrOfResults": number,
  "Results": RecordItem[]
};
