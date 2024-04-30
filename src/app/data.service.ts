import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiResponse: any;
  private apiDataSubject = new Subject<any>();

  setApiData(data: any) {
    this.apiResponse = data;
    this.apiDataSubject.next(data);
  }

  getApiData(): any {
    return this.apiResponse;
  }

  getApiDataObservable() {
    return this.apiDataSubject.asObservable();
  }
}
