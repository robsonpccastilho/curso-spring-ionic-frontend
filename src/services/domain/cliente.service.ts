import { ClassField } from "@angular/compiler/src/output/output_ast";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { ClienteDTO } from "../../models/cliente.dto";
import { API_CONFIG } from "../../Config/api.config";
import { StorageService } from "../storage.service";

@Injectable()
export class ClienteService{
    constructor (public http: HttpClient, public storage: StorageService){

    }

    findByEmail(email: string) : Observable<ClienteDTO> {
        //Como já está implementado no auth-interceptor não precisa colocar como abaixo
        /* ----- INICIO --------------------------------------
        let token = this.storage.getLocaUser().token;
        let authHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + token }); 
        return this.http.get<ClienteDTO>(
            `${API_CONFIG.baseUrl}/clientes/email?value=${email}`,
            {'headers':authHeader});
        -------- FIM ----------------------------------------- */
        //let url = `${API_CONFIG.baseUrl}/clientes/email?value=${email}`
        //console.log("ClienteService -- url API --> " + url);
        return this.http.get<ClienteDTO>(`${API_CONFIG.baseUrl}/clientes/email?value=${email}`);
    }

    getImageFromBucket(id: String) : Observable<any> {
        let url = `${API_CONFIG.bucketBaseUrl}/cp${id}.jpg`
        return this.http.get(url, {responseType : 'blob'});

    }
}