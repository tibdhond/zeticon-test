import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RECORDS } from '../mock/mock-records-result';
import { RecordItem } from '../models/record';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  baseUrl = "https://integration.mediahaven.com/mediahaven-rest-api/v2/";

  constructor(private http: HttpClient) { }

  getRecordsMock(): Observable<ResultType> {
    return (new BehaviorSubject<ResultType>(RECORDS)).asObservable();
  }

  getRecords(startIndex: number, nrOfResults=25): Observable<{
    "NrOfResults": number,
    "StartIndex": number,
    "TotalNrOfResults": number,
    "Results": RecordItem[]
  }> {
    const options = {
      "params": {
        "startIndex": startIndex,
        "nrOfResults": nrOfResults,
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
