import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginObject } from "./login-object.model";
import { Session } from "../../core/models/session.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";

/**
 * 
 *      SERVICIO QUE CONECTA CON EL API PARA LA OBTENCION DE LA SESION
 * 
 */

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  private basePath = 'http://localhost:8080/eClick-web/test/loginAngularAPI/';

  login(loginObj: LoginObject): Observable<Session> {
    console.log(loginObj);
    return this.http.post<Session>(this.basePath + 'authenticate', loginObj);
  }

  logout(): Observable<Boolean> {
    return this.http.post<Boolean>(this.basePath + 'logout', {});
  }
}
