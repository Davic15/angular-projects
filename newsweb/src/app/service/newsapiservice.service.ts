import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {

  constructor(private http: HttpClient) {
  }

  topHeading(): Observable<any> {
    return this.http.get(environment.baseUrlHome + environment.appid)
  }

  techNews(): Observable<any> {
    return this.http.get(environment.baseUrlTech + environment.appid);
  }

  businessNews(): Observable<any> {
    return this.http.get(environment.baseUrlBusiness + environment.appid);
  }


}
