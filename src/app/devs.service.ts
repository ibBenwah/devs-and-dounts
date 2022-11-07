import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DevsAPIResponse } from './devs-api-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DevsService {

  constructor(private httpClient: HttpClient) { }

  getDevs(): Observable<DevsAPIResponse> {
    return this.httpClient.get<DevsAPIResponse>('https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json');
  }
}
