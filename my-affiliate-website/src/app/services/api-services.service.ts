import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environments";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {
  constructor(private  http: HttpClient) {}

  homeApi():Observable<any> {
    return this.http.get(environment.baseUrl)
  }


}
