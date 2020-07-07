import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../Config/api.config";
import { Observable } from "rxjs/Rx";

@Injectable()
export class ProdutoService {

  constructor(public http: HttpClient) {
  }

  findByCategoria(categoria_id : string) {

    return this.http.get(`${API_CONFIG.baseUrl}/produtos/?categorias=${categoria_id}`);

    //return this.http.get(`${API_CONFIG.baseUrl}/produtos/?categorias=${categoria_id}`);
  }
}