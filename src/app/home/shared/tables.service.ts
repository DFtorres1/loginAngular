import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { TableGet } from "../../core/models/table.model";

/**
 * 
 *      SERVICIO QUE CONECTA CON EL API PARA LA OBTENCION DE LAS TABLAS
 * 
 */

@Injectable({ providedIn: 'root' })
export class TableService {

    constructor(private http: HttpClient) { }
    result: any;
    private basePath = 'http://localhost:8080/eClick-web/test/loginAngularAPI/';

    getTableFactor(): Observable<TableGet> {
        this.result = JSON.stringify(this.http.post<TableGet>(this.basePath + 'getTableFactor', null));
        console.log(this.result);
        return this.http.post<TableGet>(this.basePath + 'getTableFactor', null);
    }

}