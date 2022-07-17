import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {LoginObject} from "./login-object.model";
import {Session} from "../../core/models/session.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
/**
 * Created by xavi on 5/16/17.
 */
@Injectable({providedIn: 'root'})
export class AuthenticationService {

  constructor(private http: HttpClient) {}

  private basePath = 'https://4454-200-91-236-43.ngrok.io/eClick-web/test/loginAngularAPI/';

  login(loginObj: LoginObject): Observable<Session> {
    console.log(loginObj);
    return this.http.post<Session>(this.basePath + 'authenticate', loginObj,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'dataType': 'jsonp'
      })
    });
  }

  logout(): Observable<Boolean> {
    return this.http.post<Boolean>(this.basePath + 'logout', {});
  }
}
